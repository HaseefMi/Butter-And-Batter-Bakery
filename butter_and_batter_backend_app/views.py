from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer, CustomCakeSerializer, ContactMessageSerializer
from rest_framework import status

@api_view(['GET', 'POST'])
def product_list(request):
    if request.method == 'GET':
        category = request.query_params.get('category', None)
        
        if category:
            items = Product.objects.filter(category__iexact=category)
        else:
            items = Product.objects.all()  
        
        serialized_items = ProductSerializer(items, many=True)
        return Response(serialized_items.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serialized_items = ProductSerializer(data=request.data)
        if serialized_items.is_valid(raise_exception=True):
            serialized_items.save()
            return Response(serialized_items.data, status = status.HTTP_201_CREATED)
        
@api_view(['POST'])
def recieve_cake_form(request):
    if request.method == 'POST':
        serialized_custom_cake_items = CustomCakeSerializer(data=request.data)
        if serialized_custom_cake_items.is_valid(raise_exception=True):
            serialized_custom_cake_items.save()
            return Response(serialized_custom_cake_items.data, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def recieve_contact_form(request):
    if request.method == 'POST':
        serialized_contact_items = ContactMessageSerializer(data=request.data)
        if serialized_contact_items.is_valid(raise_exception=True):
            serialized_contact_items.save()
            return Response(serialized_contact_items.data, status=status.HTTP_201_CREATED)
        
@api_view(['GET'])
def search(request):
    if request.method == 'GET':
        search_term = request.query_params.get('q', '')
        if not search_term:
            return Response({"error": "Search Term Not Provided"}, status=status.HTTP_400_BAD_REQUEST)
        results = Product.objects.filter(name__icontains = search_term)
        serialized_results = ProductSerializer(results, many=True)
        return Response(serialized_results.data, status=status.HTTP_200_OK)
