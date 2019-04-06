from rest_framework import serializers
from webapp.models import Order, Category, Good, Photo
from rest_framework.exceptions import ValidationError
from rest_framework.authtoken.models import Token


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


class AuthTokenSerializer(serializers.Serializer):
    token = serializers.CharField(write_only=True)

    def validate_token(self, token):
        try:
            return Token.objects.get(key=token)
        except Token.DoesNotExist:
            raise ValidationError("Invalid credentials")
