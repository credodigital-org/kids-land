from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# API structure:
#   /api/auth/...                  -> accounts app (login)
#   /api/gallery/...               -> gallery app
#   /api/academic-calendar/...     -> documents app
#   /api/newspaper-archive/...     -> documents app
#
# To add a new editable section later (e.g. Testimonials, Programs),
# add one more include() line here pointing at the new app's urls.py.
# See backend/README.md for the full step-by-step.

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("apps.accounts.urls")),
    path("api/gallery/", include("apps.gallery.urls")),
    path("api/", include("apps.documents.urls")),
    path("api/", include("apps.guidelines.urls")),
    path("api/testimonials/", include("apps.testimonials.urls")),
]

# Note: in production (R2 configured), uploaded files are served
# directly from Cloudflare R2 via the URL stored on each model - this
# line only matters for LOCAL TESTING when R2 isn't set up yet, so
# Django's dev server can serve files saved to backend/media/.
if settings.DEBUG and not getattr(settings, "USE_R2", False):
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
