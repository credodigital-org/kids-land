from rest_framework import viewsets, permissions
from .models import GalleryImage
from .serializers import GalleryImageSerializer


class GalleryImageViewSet(viewsets.ModelViewSet):
    """
    Public: GET list/detail (no auth required - the site's gallery is public).
    Admin only: POST / PUT / PATCH / DELETE (create, edit, remove images).
    """

    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
