from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits= 5, decimal_places= 2)
    image_url = models.URLField(max_length=200)
    description = models.CharField(max_length=500, blank=True, null=True)
    category = models.CharField(max_length=250)

class CustomCakeForm(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone_number = models.CharField(max_length=15)
    event_date = models.DateField()
    event_time = models.CharField(max_length=255)
    event_type = models.CharField(max_length=255)
    cake_size = models.CharField(max_length=255)
    cake_flavour = models.CharField(max_length=255)
    frosting = models.CharField(max_length=255)
    dietary_restrictions = models.CharField(max_length=255, blank=True, null=True)
    theme = models.CharField(max_length=255, blank=True, null=True)
    decorations = models.CharField(max_length=255, blank=True, null=True)
    special_messages = models.CharField(max_length=255, blank=True, null=True)
    order_type = models.CharField(max_length=255)
    delivery_address = models.CharField(max_length=255, blank=True, null=True)
    pickup_address = models.CharField(max_length=255, blank=True, null=True)
    special_considerations = models.CharField(max_length=255, blank=True, null=True)
    additional_notes = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.event_type}'

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    phone_number = models.CharField(max_length=15)
    message = models.CharField(max_length=400)
    