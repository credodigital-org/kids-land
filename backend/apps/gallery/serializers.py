# from rest_framework import serializers
# from .models import GalleryImage


# class GalleryImageSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = GalleryImage
#         fields = ["id", "title", "image", "order", "uploaded_at"]
#         read_only_fields = ["id", "uploaded_at"]

from rest_framework import serializers

from .models import GalleryImage


class GalleryImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = GalleryImage

        fields = [
            "id",
            "title",
            "image",
            "category",
            "order",
            "uploaded_at",
        ]

        read_only_fields = [
            "id",
            "uploaded_at",
        ]