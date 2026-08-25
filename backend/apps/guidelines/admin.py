from django.contrib import admin
from .models import ParentGuideline


@admin.register(ParentGuideline)
class ParentGuidelineAdmin(admin.ModelAdmin):
    list_display = ["title", "is_active", "uploaded_at"]
