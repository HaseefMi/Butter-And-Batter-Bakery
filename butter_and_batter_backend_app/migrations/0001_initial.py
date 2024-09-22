# Generated by Django 5.0.6 on 2024-09-22 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('image_url', models.URLField()),
                ('description', models.CharField(blank=True, max_length=500, null=True)),
                ('category', models.CharField(max_length=250)),
            ],
        ),
    ]
