from rest_framework import viewsets, permissions, generics
from .models import AcademicCalendar, NewspaperEdition
from .serializers import AcademicCalendarSerializer, NewspaperEditionSerializer


class AcademicCalendarCurrentView(generics.RetrieveAPIView):
    """Public endpoint: GET the single currently-active calendar."""

    serializer_class = AcademicCalendarSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        return AcademicCalendar.objects.filter(is_active=True).first()


class AcademicCalendarAdminViewSet(viewsets.ModelViewSet):
    """Admin only: list/upload/delete calendar versions."""

    queryset = AcademicCalendar.objects.all()
    serializer_class = AcademicCalendarSerializer
    permission_classes = [permissions.IsAdminUser]


class NewspaperEditionViewSet(viewsets.ModelViewSet):
    """
    The monthly newsletter/newspaper archive.
    Public: GET list/detail - the archive is publicly browsable.
    Admin only: POST / PUT / PATCH / DELETE.
    """

    queryset = NewspaperEdition.objects.all()
    serializer_class = NewspaperEditionSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
