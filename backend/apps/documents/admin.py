from django.contrib import admin
from .models import AcademicCalendar, NewspaperEdition


@admin.register(AcademicCalendar)
class AcademicCalendarAdmin(admin.ModelAdmin):
    list_display = ["title", "is_active", "uploaded_at"]


@admin.register(NewspaperEdition)
class NewspaperEditionAdmin(admin.ModelAdmin):
    list_display = ["title", "edition_date", "uploaded_at"]
    ordering = ["-edition_date"]
