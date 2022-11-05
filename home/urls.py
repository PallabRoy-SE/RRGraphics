from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('signup', views.handleSignup, name='signup'),
    path('signin', views.handleSignin, name='signin'),
    path('logout', views.handleLogout, name='logout'),
    path('portfolio', views.portfolio, name='portfolio'),
    path('contact', views.contact, name='contact'),
    path('mydashboard', views.userDashboard, name='userDashboard'),
    path('mydashboard/editprofile', views.editProfile, name='editProfile'),
    path('mydashboard/editpassword', views.editPassword, name='editPassword'),
    path('mydashboard/product/add', views.productAdd, name='productAdd'),
    path('mydashboard/product/<str:product_id>/edit', views.productEdit, name='productEdit'),
    path('mydashboard/product/<str:product_id>/delete', views.productDelete, name='productDelete'),
]