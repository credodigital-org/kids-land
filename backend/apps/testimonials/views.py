from rest_framework import viewsets, permissions
from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialViewSet(viewsets.ModelViewSet):
    """
    Public: GET list/detail (testimonials are public-facing).
    Admin only: POST / PUT / PATCH / DELETE.
    """

    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return [permissions.AllowAny()]
        return [permissions.IsAdminUser()]
