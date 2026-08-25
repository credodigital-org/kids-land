from rest_framework import serializers
from .models import AcademicCalendar, NewspaperEdition


class AcademicCalendarSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicCalendar
        fields = ["id", "title", "file", "is_active", "uploaded_at"]
        read_only_fields = ["id", "uploaded_at"]


class NewspaperEditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewspaperEdition
        fields = ["id", "title", "file", "edition_date", "uploaded_at"]
        read_only_fields = ["id", "uploaded_at"]
