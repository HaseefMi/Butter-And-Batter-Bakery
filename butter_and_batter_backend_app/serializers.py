from rest_framework import serializers
from .models import Product, CustomCakeForm, ContactMessage

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'image_url', 'description', 'category']
class CustomCakeSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomCakeForm
        fields = '__all__'
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone_number', 'message']