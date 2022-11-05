from django.urls import path
from products import views

urlpatterns = [
    path('', views.productsHome, name='productsHome'),
    path('<str:video_id>', views.productPreview, name='productPreview'),
    path('category/<str:product_category>', views.productsCategory, name='productsCategory'),
    path('search/', views.search, name='search'),
]