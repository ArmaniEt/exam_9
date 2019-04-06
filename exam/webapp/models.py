from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)


class Good(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    arrival_date = models.DateTimeField()
    categories = models.ManyToManyField(Category, related_name='good')
    price = models.DecimalField(max_digits=10, decimal_places=2)


class Photo(models.Model):
    good = models.ForeignKey(Good, on_delete=models.CASCADE, related_name='good_photo')
    photo = models.ImageField(upload_to='posters')


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    goods = models.TextField(max_length=2000)
    phone = models.CharField(max_length=255)
    address = models.TextField(max_length=2000, null=True, blank=True)
    comments = models.TextField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
