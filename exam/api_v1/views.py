from webapp.models import Order, Category, Good
from rest_framework import viewsets
from api_v1.serializers import GoodCreateSerializer, GoodDisplaySerializer, \
    OrderSerializer, CategorySerializer
from rest_framework.permissions import IsAuthenticated, AllowAny


class BaseViewSet(viewsets.ModelViewSet):
    def get_permissions(self):
        permissions = super().get_permissions()
        if self.request.method in ["POST", "DELETE", "PUT", "PATCH"]:
            permissions.append(IsAuthenticated())
        return permissions


class GoodViewSet(BaseViewSet):
    queryset = Good.objects.all().order_by('-arrival_date')
    serializer_class = GoodCreateSerializer

    def get_serializer_class(self):
        if self.request.method == "GET":
            return GoodDisplaySerializer
        else:
            return GoodCreateSerializer


class OrderViewSet(BaseViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class CategoryViewSet(BaseViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


