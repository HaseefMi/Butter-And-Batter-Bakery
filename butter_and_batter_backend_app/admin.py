from django.contrib import admin
from .models import Product, CustomCakeForm, ContactMessage

admin.site.register(Product)
admin.site.register(CustomCakeForm)
admin.site.register(ContactMessage)