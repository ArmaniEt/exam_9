from rest_framework import serializers
from webapp.models import Order, Category, Good, Photo


class InlineCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')


class PhotoInlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('photo', 'id')


class GoodCreateSerializer(serializers.ModelSerializer):
    good_photo = PhotoInlineSerializer(many=True, read_only=True)

    class Meta:
        model = Good
        fields = ('id', 'name', 'description', 'arrival_date', 'price', 'categories', 'good_photo')


class GoodDisplaySerializer(GoodCreateSerializer):
    categories = InlineCategorySerializer(many=True, read_only=True)
    good_photo = PhotoInlineSerializer(many=True, read_only=True)


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'user', 'goods', 'phone', 'address', 'comments', 'created_at')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'description')



