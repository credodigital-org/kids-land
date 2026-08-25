from rest_framework import serializers
from .models import ParentGuideline


class ParentGuidelineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentGuideline
        fields = ["id", "title", "file", "is_active", "uploaded_at"]
        read_only_fields = ["id", "uploaded_at"]
