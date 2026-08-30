from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    AcademicCalendarCurrentView,
    AcademicCalendarAdminViewSet,
    NewspaperEditionViewSet,
    NewsletterCurrentView,
    NewsletterAdminViewSet,
)

router = DefaultRouter()
router.register("newspaper-archive", NewspaperEditionViewSet, basename="newspaper-edition")
router.register("admin/academic-calendar", AcademicCalendarAdminViewSet, basename="academic-calendar-admin")
router.register("admin/newsletter", NewsletterAdminViewSet, basename="newsletter-admin")

urlpatterns = [
    path("academic-calendar/current/", AcademicCalendarCurrentView.as_view(), name="academic-calendar-current"),
    path("newsletter/current/", NewsletterCurrentView.as_view(), name="newsletter-current"),
] + router.urls
