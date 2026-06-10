# store/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from store.views.health     import health_check
from store.views.user       import UserViewSet
from store.views.category   import CategoryViewSet
from store.views.product    import ProductViewSet
from store.views.order      import OrderViewSet
from store.serializers.auth import CustomTokenView
from store.views.email import SendNotificationView

# Importaciones unificadas de autenticación
from store.views.auth import (
    RegisterView,
    LogoutView,
    PasswordResetRequestView,
    PasswordResetConfirmView,
)

# Configuración del Router para los ViewSets
router = DefaultRouter()
router.register('users',      UserViewSet,      basename='user')
router.register('categories', CategoryViewSet, basename='category')
router.register('products',   ProductViewSet,   basename='product')
router.register('orders',     OrderViewSet,     basename='order')

# Endpoints de la API
urlpatterns = [
    path('health/',             health_check),
    
    # Autenticación y JWT
    path('auth/register/',      RegisterView.as_view()),
    path('auth/login/',         CustomTokenView.as_view()),  # Login usando tu serializer personalizado
    path('auth/token/refresh/', TokenRefreshView.as_view()),
    path('auth/token/verify/',  TokenVerifyView.as_view()),
    path('auth/logout/',        LogoutView.as_view()),
    
    # Recuperación de contraseña
    path('auth/password-reset/',         PasswordResetRequestView.as_view(), name='auth-password-reset'),
    path('auth/password-reset/confirm/', PasswordResetConfirmView.as_view(), name='auth-password-reset-confirm'),

    path('emails/send/', SendNotificationView.as_view(), name='email-send-notification'),
    
    # Rutas del Router
    path('', include(router.urls)),
]