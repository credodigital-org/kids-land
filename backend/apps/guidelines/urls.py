from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ParentGuidelineCurrentView, ParentGuidelineAdminViewSet

router = DefaultRouter()
router.register("admin/parent-guidelines", ParentGuidelineAdminViewSet, basename="parent-guideline-admin")

urlpatterns = [
    path("parent-guidelines/current/", ParentGuidelineCurrentView.as_view(), name="parent-guideline-current"),
] + router.urls
