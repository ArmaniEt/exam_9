from django.contrib import admin
from webapp.models import Order, Category, Good, Photo


class GoodAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'arrival_date']
    filter_horizontal = ['categories']
    ordering = ['-arrival_date']
    search_fields = ['name', 'id']


class OrderAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user', 'created_at']
    ordering = ['-created_at']
    search_fields = ['user', 'id']


admin.site.register(Order, OrderAdmin)
admin.site.register(Good, GoodAdmin)
admin.site.register(Photo)
admin.site.register(Category)


