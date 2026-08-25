from django.db import models


class ParentGuideline(models.Model):
    """
    The Parent Guidelines document. Same pattern as AcademicCalendar -
    only one is ever "current"; uploading a new one deactivates the
    previous one automatically. Old ones stay in the database for
    reference, they just stop being the one shown on the site.
    """

    file = models.FileField(upload_to="guidelines/")
    title = models.CharField(max_length=200, default="Parent Guidelines")
    is_active = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-uploaded_at"]

    def save(self, *args, **kwargs):
        if self.is_active:
            ParentGuideline.objects.exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.uploaded_at:%Y-%m-%d})"
