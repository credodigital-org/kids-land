from django.db import models


class AcademicCalendar(models.Model):
    """
    The Academic Calendar PDF. Only one is ever "current" - uploading a
    new one automatically deactivates the previous one (see save()).
    Old ones stay in the database (not deleted) in case they're needed
    for reference, they just stop being the one shown on the site.
    """

    file = models.FileField(upload_to="calendar/")
    title = models.CharField(max_length=200, default="Academic Calendar")
    is_active = models.BooleanField(default=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-uploaded_at"]

    def save(self, *args, **kwargs):
        if self.is_active:
            AcademicCalendar.objects.exclude(pk=self.pk).update(is_active=False)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} ({self.uploaded_at:%Y-%m-%d})"


class NewspaperEdition(models.Model):
    """
    One monthly newsletter/newspaper edition (same thing - the client
    calls it "newsletter", this model predates that name but there's no
    real difference: both are a single large monthly PDF). All editions
    stay in the archive - nothing is auto-deactivated like the calendar.
    Ordered by edition_date so the site always shows them chronologically
    regardless of upload order.

    Only one edition is allowed per calendar month - see
    DocumentsConfig / serializer validation, since edition_date can be
    any day within the month (e.g. 2026-08-01 or 2026-08-15 both mean
    "August 2026").
    """

    title = models.CharField(max_length=200, help_text='e.g. "September 2026"')
    file = models.FileField(upload_to="newspaper/")
    edition_date = models.DateField(help_text="Used to sort editions chronologically")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-edition_date"]

    def __str__(self):
        return self.title
