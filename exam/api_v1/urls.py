from django.urls import include, path
from rest_framework import routers
from api_v1 import views


router = routers.DefaultRouter()

# TODO register your views here, also create url patterns

router.register(r'goods', views.GoodViewSet)
router.register(r'orders', views.OrderViewSet)
router.register(r'categories', views.CategoryViewSet)


app_name = 'api_v1'

urlpatterns = [
    path('', include(router.urls)),
    path('login/', views.LoginView.as_view(), name='api_token_auth'),
    path('token-login/', views.TokenLoginView.as_view(), name='api_token_re_login'),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

