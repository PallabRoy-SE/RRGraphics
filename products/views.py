from django.shortcuts import render, HttpResponse
from products.models import Product
import math

# Create your views here.
def productsHome(request):
    all_Products= Product.objects.all().order_by('-publish_date')
    product_categories = set()
    for product in all_Products:
        product_categories.add(product.product_category)

    # Pagination section  
    page = request.GET.get('page')
    products_no = 12

    if page is None:
        page_no = 1
    else:
        page_no = int(page)
    
    length = len(all_Products)
    product_to_show = all_Products[(page_no-1)*products_no : page_no*products_no]

    if page_no>1:
        prev = page_no-1
    else:
        prev = None

    if page_no<math.ceil(length/products_no):
        nxt = page_no+1
    else:
        nxt = None
    
    context = {'allProducts': product_to_show, 'prev': prev, 'nxt': nxt, 'all_categories': product_categories}
    return render(request, 'products/productsHome.html', context)

def productPreview(request, video_id):
    product = Product.objects.filter(video_id=video_id).first()
    # view counter section
    product.product_views = product.product_views + 1
    product.save()

    category = product.product_category
    categoryProducts = Product.objects.filter(product_category=category).exclude(video_id=video_id).order_by('-product_views')
    context = {'product': product, 'categoryProducts': categoryProducts}
    return render(request, 'products/productPreview.html', context)

def productsCategory(request, product_category):
    all_Products= Product.objects.all()
    product_categories = set()
    for product in all_Products:
        product_categories.add(product.product_category)

    product = Product.objects.filter(product_category=product_category).order_by('-publish_date')

    # Pagination section  
    page = request.GET.get('page')
    products_no = 12

    if page is None:
        page_no = 1
    else:
        page_no = int(page)
    
    length = len(product)
    product_to_show = product[(page_no-1)*products_no : page_no*products_no]

    if page_no>1:
        prev = page_no-1
    else:
        prev = None

    if page_no<math.ceil(length/products_no):
        nxt = page_no+1
    else:
        nxt = None
    
    context = {'category_products': product_to_show, 'title': product_category, 'prev': prev, 'nxt': nxt, 'all_categories': product_categories}
    return render(request, 'products/productsCategory.html', context)

def search(request):
    # Category section
    all_Products= Product.objects.all()
    product_categories = set()
    for product in all_Products:
        product_categories.add(product.product_category)

    # search section
    query = request.GET['query']
    if len(query)>101:
        all_search_products = Product.objects.none()
    else:
        search_title_products = Product.objects.filter(product_title__icontains= query)
        search_description_products = Product.objects.filter(product_description__icontains= query)
        search_user_products = Product.objects.filter(product_user__username__icontains= query)
        search_category_products = Product.objects.filter(product_category__icontains= query)
        search_subcategory_products = Product.objects.filter(product_subcategory__icontains= query)
        search_video_id_products = Product.objects.filter(video_id__icontains= query)
        all_search_products = search_title_products.union(search_description_products.union(search_user_products.union(search_category_products.union(search_subcategory_products.union(search_video_id_products)))))

    # Pagination section  
    page = request.GET.get('page')
    products_no = 12

    if page is None:
        page_no = 1
    else:
        page_no = int(page)
    
    length = len(all_search_products)
    product_to_show = all_search_products[(page_no-1)*products_no : page_no*products_no]

    if page_no>1:
        prev = page_no-1
    else:
        prev = None

    if page_no<math.ceil(length/products_no):
        nxt = page_no+1
    else:
        nxt = None
    context = {'allProducts': product_to_show, 'prev': prev, 'nxt': nxt, 'all_categories': product_categories, 'query': query}
    return render(request, 'products/search.html', context)