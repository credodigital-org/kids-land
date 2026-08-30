from rest_framework import viewsets, permissions, generics
from .models import AcademicCalendar, NewspaperEdition, Newsletter
from .serializers import AcademicCalendarSerializer, NewspaperEditionSerializer, NewsletterSerializer


class NewsletterCurrentView(generics.RetrieveAPIView):
    """Public endpoint: GET the single currently-active newsletter."""

    serializer_class = NewsletterSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        return Newsletter.objects.filter(is_active=True).first()


class NewsletterAdminViewSet(viewsets.ModelViewSet):
    """Admin only: list/upload/delete newsletter versions."""

    queryset = Newsletter.objects.all()
    serializer_class = NewsletterSerializer
    permission_classes = [permissions.IsAdminUser]


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
    Public: GET list/detail - the archive is publicly browsable.
    Admin only: POST / PUT / PATCH / DELETE.
    """

    queryset = NewspaperEdition.objects.all()
    serializer_class = NewspaperEditionSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
