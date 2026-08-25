# from django.db import models


# class GalleryImage(models.Model):
#     """One image in the public Gallery section."""

#     title = models.CharField(max_length=200, blank=True)
#     image = models.ImageField(upload_to="gallery/")
#     order = models.PositiveIntegerField(default=0, help_text="Lower numbers show first")
#     uploaded_at = models.DateTimeField(auto_now_add=True)

#     class Meta:
#         ordering = ["order", "-uploaded_at"]

#     def __str__(self):
#         return self.title or f"Gallery image #{self.pk}"


from django.db import models


class GalleryImage(models.Model):
    """One image in the public Gallery section."""

    CATEGORY_CHOICES = [
        ("Classrooms", "Classrooms"),
        ("Playground", "Playground"),
        ("Events", "Events"),
    ]

    title = models.CharField(
        max_length=200,
        blank=True
    )

    image = models.ImageField(
        upload_to="gallery/"
    )

    category = models.CharField(
        max_length=50,
        choices=CATEGORY_CHOICES,
        default="Events"
    )

    order = models.PositiveIntegerField(
        default=0,
        help_text="Lower numbers show first"
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ["order", "-uploaded_at"]

    def __str__(self):
        return self.title or f"Gallery image #{self.pk}"