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

    def validate_edition_date(self, value):
        """
        Only one edition allowed per calendar month - edition_date can be
        any day within that month (2026-08-01 and 2026-08-15 both mean
        "August 2026"), so this checks year+month, not the exact date.
        On update, excludes the edition being edited so re-saving the
        same edition doesn't trip over itself.
        """
        existing = NewspaperEdition.objects.filter(
            edition_date__year=value.year,
            edition_date__month=value.month,
        )
        if self.instance is not None:
            existing = existing.exclude(pk=self.instance.pk)

        if existing.exists():
            raise serializers.ValidationError(
                f"An edition for {value.strftime('%B %Y')} already exists. "
                "Edit or delete that one instead of uploading a duplicate."
            )
        return value
