from django.urls import path
from . import views
urlpatterns = [
    path('product-list/', views.product_list, name='product_list'),
    path('custom-cake-form', views.recieve_cake_form, name = "custom-cake-form"),
    path('contact-form', views.recieve_contact_form, name='contact-form'),
]

