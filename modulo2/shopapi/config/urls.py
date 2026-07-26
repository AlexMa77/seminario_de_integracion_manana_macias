# config/urls.py
from django.contrib import admin
from django.urls import path, include
<<<<<<< HEAD
from django.conf import settings
from django.conf.urls.static import static
=======
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('store.urls')),
<<<<<<< HEAD
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
=======
]
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9
