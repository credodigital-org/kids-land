from django.db import models


class Testimonial(models.Model):
    """One parent testimonial shown on the public site."""

    parent_name = models.CharField(max_length=150)
    subtitle = models.CharField(
        max_length=150, blank=True,
        help_text='Relationship shown under the name, e.g. "Mother of a Baby"'
    )
    message = models.TextField()
    rating = models.DecimalField(
        max_digits=2, decimal_places=1, default=5.0,
        help_text="1 to 5 stars, half-star steps allowed (e.g. 4.5)"
    )
    photo = models.ImageField(upload_to="testimonials/", blank=True, null=True)
    order = models.PositiveIntegerField(default=0, help_text="Lower numbers show first")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order", "-created_at"]

    def __str__(self):
        return f"{self.parent_name} ({self.rating}★)"
