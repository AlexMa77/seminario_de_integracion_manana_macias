# store/models/product.py
<<<<<<< HEAD
import uuid
from pathlib import Path
=======
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9
from django.db import models
from .category import Category


<<<<<<< HEAD
def product_image_path(instance, filename):
    ext = Path(filename).suffix.lower()
    return f'products/{uuid.uuid4()}{ext}'


=======
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9
class Product(models.Model):
    name        = models.CharField(max_length=200)
    description = models.TextField(blank=True, default='')
    price       = models.DecimalField(max_digits=10, decimal_places=2)
    stock       = models.PositiveIntegerField(default=0)
    is_active   = models.BooleanField(default=True)
<<<<<<< HEAD
    image       = models.ImageField(upload_to=product_image_path, blank=True, null=True)   # ← nuevo
=======
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9
    category    = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name='products',
    )
    created_at  = models.DateTimeField(auto_now_add=True)
    updated_at  = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

    @property
    def price_with_tax(self):
        return round(float(self.price) * 1.15, 2)

    @property
    def in_stock(self):
        return self.stock > 0