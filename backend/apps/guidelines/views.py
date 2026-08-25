from rest_framework import generics, viewsets, permissions
from .models import ParentGuideline
from .serializers import ParentGuidelineSerializer


class ParentGuidelineCurrentView(generics.RetrieveAPIView):
    """Public endpoint: GET the single currently-active guidelines document."""

    serializer_class = ParentGuidelineSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        return ParentGuideline.objects.filter(is_active=True).first()


class ParentGuidelineAdminViewSet(viewsets.ModelViewSet):
    """Admin only: list/upload/delete guideline versions."""

    queryset = ParentGuideline.objects.all()
    serializer_class = ParentGuidelineSerializer
    permission_classes = [permissions.IsAdminUser]
