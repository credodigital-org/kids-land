"""
Usage: python manage.py create_admin --email staff@kidsland.com --password yourpassword
Creates (or resets the password of) a staff user who can log into the admin panel.
"""
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model


class Command(BaseCommand):
    help = "Create or update an admin panel staff user"

    def add_arguments(self, parser):
        parser.add_argument("--email", required=True)
        parser.add_argument("--password", required=True)

    def handle(self, *args, **options):
        User = get_user_model()
        email = options["email"]
        password = options["password"]

        user, created = User.objects.get_or_create(
            username=email,
            defaults={"email": email, "is_staff": True},
        )
        user.is_staff = True
        user.set_password(password)
        user.save()

        action = "Created" if created else "Updated"
        self.stdout.write(self.style.SUCCESS(f"{action} admin user: {email}"))
