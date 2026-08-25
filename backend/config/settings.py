"""
Kids Land Nursery — Django settings.

Design notes for future maintainers:
- Every editable content type (Gallery, Academic Calendar, Newspaper Archive,
  and anything added later) lives in its own app under apps/. See
  backend/README.md for the exact steps to add a new one without touching
  existing apps.
- All file uploads (images + PDFs) go through the same Cloudflare R2 bucket
  via django-storages - one storage integration for everything.
"""

import os
from pathlib import Path
from datetime import timedelta
import dj_database_url
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get("SECRET_KEY", "dev-only-insecure-key")
DEBUG = os.environ.get("DEBUG", "True") == "True"
ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS", "localhost,127.0.0.1").split(",")

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "rest_framework",
    "rest_framework_simplejwt",
    "corsheaders",
    "storages",

    # Kids Land content apps - one app per editable section.
    # To add a new section later, add its app here (see README.md).
    "apps.accounts",
    "apps.gallery",
    "apps.documents",
    "apps.guidelines",
    "apps.testimonials",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

# ------------------------------------------------------------------
# Database - Postgres (Neon in production), matches your other projects
# ------------------------------------------------------------------
DATABASES = {
    "default": dj_database_url.config(
        default=os.environ.get("DATABASE_URL", f"sqlite:///{BASE_DIR / 'db.sqlite3'}"),
        conn_max_age=600,
    )
}

AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kolkata"
USE_I18N = True
USE_TZ = True

STATIC_URL = "static/"
STATIC_ROOT = BASE_DIR / "staticfiles"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# ------------------------------------------------------------------
# CORS - only the frontend origin(s) may call this API
# ------------------------------------------------------------------
CORS_ALLOWED_ORIGINS = os.environ.get(
    "CORS_ALLOWED_ORIGINS", "http://localhost:5173"
).split(",")

# ------------------------------------------------------------------
# DRF + JWT
# ------------------------------------------------------------------
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "rest_framework_simplejwt.authentication.JWTAuthentication",
    ),
    "DEFAULT_PAGINATION_CLASS": "rest_framework.pagination.PageNumberPagination",
    "PAGE_SIZE": 20,
}

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(hours=8),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=7),
    "ROTATE_REFRESH_TOKENS": True,
}

# ------------------------------------------------------------------
# Cloudflare R2 storage (S3-compatible) - used for every file upload:
# gallery images, academic calendar PDF, newspaper archive PDFs.
# Large files (newspaper PDFs up to ~250MB) are supported - see README.md
# for the request-size settings needed on the hosting side (Render).
#
# LOCAL TESTING: if R2 credentials aren't set yet in .env, this
# automatically falls back to storing files on your own machine
# (in backend/media/) so you can test uploads without Cloudflare set
# up. Once you add real R2_* values to .env, it switches to R2
# automatically - no code change needed.
# ------------------------------------------------------------------
USE_R2 = bool(os.environ.get("R2_ACCESS_KEY_ID")) and bool(os.environ.get("R2_ENDPOINT_URL"))

if USE_R2:
    STORAGES = {
        "default": {
            "BACKEND": "storages.backends.s3.S3Storage",
        },
        "staticfiles": {
            "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
        },
    }
    AWS_ACCESS_KEY_ID = os.environ.get("R2_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY = os.environ.get("R2_SECRET_ACCESS_KEY")
    AWS_STORAGE_BUCKET_NAME = os.environ.get("R2_BUCKET_NAME")
    AWS_S3_ENDPOINT_URL = os.environ.get("R2_ENDPOINT_URL")
    AWS_S3_CUSTOM_DOMAIN = os.environ.get("R2_PUBLIC_URL", "").replace("https://", "").replace("http://", "") or None
    AWS_S3_ADDRESSING_STYLE = "virtual"
    AWS_DEFAULT_ACL = None
    AWS_QUERYSTRING_AUTH = False
else:
    # Local fallback - files save to backend/media/ and are served by
    # Django's dev server. Fine for local testing, NOT for production.
    STORAGES = {
        "default": {
            "BACKEND": "django.core.files.storage.FileSystemStorage",
        },
        "staticfiles": {
            "BACKEND": "django.contrib.staticfiles.storage.StaticFilesStorage",
        },
    }
    MEDIA_URL = "/media/"
    MEDIA_ROOT = BASE_DIR / "media"

# Large file uploads (newspaper PDFs) - raise Django's in-memory threshold
# so big files stream to disk during upload instead of filling RAM.
DATA_UPLOAD_MAX_MEMORY_SIZE = 300 * 1024 * 1024   # 300 MB
FILE_UPLOAD_MAX_MEMORY_SIZE = 10 * 1024 * 1024    # 10 MB before switching to temp file
