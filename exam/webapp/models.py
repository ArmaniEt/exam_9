from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)

    def __str__(self):
        return self.name


class Good(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(max_length=2000, null=True, blank=True)
    arrival_date = models.DateTimeField()
    categories = models.ManyToManyField(Category, related_name='good')
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return 'Good is {0}, arrival date: {1}'.format(self.name, self.arrival_date)


class Photo(models.Model):
    good = models.ForeignKey(Good, on_delete=models.CASCADE, related_name='good_photo')
    photo = models.ImageField(upload_to='posters')

    def __str__(self):
        return str(self.good)


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    goods = models.TextField(max_length=2000)
    phone = models.CharField(max_length=255)
    address = models.TextField(max_length=2000, null=True, blank=True)
    comments = models.TextField(max_length=2000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{0}, address is {1}'.format(self.user, self.address)
