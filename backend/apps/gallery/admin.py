# from django.contrib import admin
# from .models import GalleryImage


# @admin.register(GalleryImage)
# class GalleryImageAdmin(admin.ModelAdmin):
#     list_display = ["title", "order", "uploaded_at"]
#     ordering = ["order"]

from django.contrib import admin

from .models import GalleryImage


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):

    list_display = [
        "title",
        "category",
        "order",
        "uploaded_at",
    ]

    list_filter = [
        "category",
    ]

    search_fields = [
        "title",
    ]

    ordering = [
        "order",
        "-uploaded_at",
    ]