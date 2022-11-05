from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from products.models import Product
from home.models import Contact
from home.models import Profile
import math

# Create your views here.
def home(request):
    all_Products= Product.objects.order_by('-product_views')[:6]
    context = {'allProducts': all_Products}
    return render(request, 'home/index.html', context)

def portfolio(request):
    return render(request, 'home/portfolio.html')

def handleSignup(request):
    if request.method == "POST":
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']
        username_email = email.split('@')
        username = username_email[0]

        # validate form
        if (pass1 != pass2):
            messages.error(request, 'Password do not match!')
            return redirect('signup')

        # create and save the user
        new_user = User.objects.create_user(username, email, pass1)
        new_user.first_name = fname
        new_user.last_name = lname
        new_user.save()

        # login the user
        password = pass1
        user = authenticate(username = username, password = password)
        if user is not None:
            login(request, user)
            successMassage = 'Welcome! ' + fname + ', Your account has been created successfully.'
            messages.success(request, successMassage)
            return redirect('home')
        else:
            return render(request, 'home/signin.html')

    return render(request, 'home/signup.html')

def handleSignin(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']
        username = email.split('@')[0]
        user = authenticate(username = username, password = password)
        if user is not None:
            login(request, user)
            successMassage = 'Welcome! Back ' + request.user.first_name + ', You have successfully loged in.'
            messages.success(request, successMassage)
            return redirect('home')
        else:
            return render(request, 'home/signin.html')
            
    return render(request, 'home/signin.html')

def handleLogout(request):
    logout(request)
    return redirect('home')

def contact(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        phone = request.POST['phone']
        msg = request.POST['message']
        contact = Contact(name=name, email=email, phone=phone, msg=msg)
        contact.save()
        messages.success(request, 'Your message has been sent successfully!!')
        return redirect(home)

def userDashboard(request):
    if request.user.is_anonymous:
        return redirect(home)
    else:
        user = request.user
        all_Products = Product.objects.filter(product_user = user)

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
        context = {'allProducts': product_to_show, 'prev': prev, 'nxt': nxt}
        return render(request, 'home/dashboard.html', context)

def editProfile(request):
    if request.user.is_anonymous:
        return redirect(home)
    elif request.method == "POST":
        user = User.objects.get(id=request.user.id)
        user.first_name = request.POST['fname']
        user.last_name = request.POST['lname']
        user.email = request.POST['email']
        username_email = user.email.split('@')
        username = username_email[0]
        user.username = username
        profile = Profile.objects.get(user=user)
        profile.profile_image = request.FILES["profileImage"]
        profile.banner_image = request.FILES["bannerImage"]       
        user.save()
        profile.save()
        messages.success(request, 'Congratulations! Your profile updated successfully.')
        return redirect(editProfile)
    else:
        return render(request, 'home/editProfile.html')

def editPassword(request):
    if request.user.is_anonymous:
        return redirect(home)
    elif request.method == 'POST':
        user = User.objects.get(id=request.user.id)
        if user.check_password(request.POST['oldPassword']):
            if request.POST['newPassword'] == request.POST['newPass2']:
                user.set_password(request.POST['newPassword'])
                user.save()
                messages.success(request, 'Congratulations! Your password changed successfully.')
                return redirect(userDashboard)
            else:
                messages.error(request, 'Password do not match. Enter password correctly.')
                return redirect(editPassword)
        else:
            messages.error(request, 'Wrong! password. Please try again.')
            return redirect(editPassword)
    else:
        return render(request, 'home/editPassword.html')

def productAdd(request):
    if request.user.is_anonymous:
        return redirect(home)
    elif request.method == "POST":
        product_title = request.POST['productTitle']
        product_user = request.user
        video_id = request.POST['videoId']
        product_category = request.POST['productCategory']
        product_subcategory = request.POST['productSubcategory']
        download_link = request.POST['downloadLink']
        product_description = request.POST['productDescription']
        product = Product(product_title=product_title, product_user=product_user, video_id=video_id, product_category=product_category, product_subcategory=product_subcategory, download_link=download_link, product_description=product_description)
        product.save()
        messages.success(request, 'Product added successfully!!')
        return redirect(userDashboard)
    else:
        return render(request, 'home/addProduct.html')

def productEdit(request, product_id):
    product = Product.objects.filter(product_id = product_id).first()
    context = {'product': product}

    # Edit Section
    if request.method == "POST":
        product.product_title = request.POST['productTitle']
        product.video_id = request.POST['videoId']
        product.product_category = request.POST['productCategory']
        product.product_subcategory = request.POST['productSubcategory']
        product.download_link = request.POST['downloadLink']
        product.product_description = request.POST['productDescription']
        product.save()
        messages.success(request, 'Product edited successfully!!')
        return redirect(productEdit, product_id)

    return render(request, 'home/editProduct.html', context)

def productDelete(request, product_id):
    product = Product.objects.filter(product_id = product_id).first()
    product.delete()
    return redirect(userDashboard)
