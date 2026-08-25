from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import (
    AcademicCalendarCurrentView,
    AcademicCalendarAdminViewSet,
    NewspaperEditionViewSet,
)

router = DefaultRouter()
router.register("newspaper-archive", NewspaperEditionViewSet, basename="newspaper-edition")
router.register("admin/academic-calendar", AcademicCalendarAdminViewSet, basename="academic-calendar-admin")

urlpatterns = [
    path("academic-calendar/current/", AcademicCalendarCurrentView.as_view(), name="academic-calendar-current"),
] + router.urls
