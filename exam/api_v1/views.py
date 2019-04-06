from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView

from webapp.models import Order, Category, Good
from rest_framework import viewsets
from api_v1.serializers import GoodCreateSerializer, GoodDisplaySerializer, \
    OrderSerializer, CategorySerializer, AuthTokenSerializer
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


class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'id': user.id,
            'username': user.username
        })


class TokenLoginView(APIView):
    serializer_class = AuthTokenSerializer

    def post(self, request):
        serializer = AuthTokenSerializer(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        token = serializer.validated_data['token']
        user = token.user
        return Response({
            'token': token.key,
            'id': user.id,
            'username': user.username,
        })