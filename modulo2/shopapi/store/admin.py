# store/admin.py
from django.contrib import admin
<<<<<<< HEAD
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from store.models import Category, Product, Order, OrderItem, UserProfile
=======
from store.models import Category, Product, Order, OrderItem
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display        = ['id', 'name', 'slug', 'is_active', 'created_at']
    list_filter         = ['is_active']
    search_fields       = ['name']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display  = ['id', 'name', 'price', 'stock', 'is_active', 'category']
    list_filter   = ['is_active', 'category']
    search_fields = ['name', 'description']
    list_editable = ['price', 'stock', 'is_active']


class OrderItemInline(admin.TabularInline):
    model  = OrderItem
    extra  = 0
    fields = ['product', 'quantity', 'unit_price']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display    = ['id', 'user', 'status', 'total', 'created_at']
    list_filter     = ['status']
    search_fields   = ['user__username']
    inlines         = [OrderItemInline]
<<<<<<< HEAD
    readonly_fields = ['total', 'created_at', 'updated_at']


class UserProfileInline(admin.StackedInline):
    model               = UserProfile
    can_delete          = False
    verbose_name_plural = 'Profile'
    fields              = ['avatar']


class UserAdmin(BaseUserAdmin):
    inlines = [UserProfileInline]


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
=======
    readonly_fields = ['total', 'created_at', 'updated_at']
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9
