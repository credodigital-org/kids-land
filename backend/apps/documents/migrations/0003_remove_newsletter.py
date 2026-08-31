from django.db import migrations


class Migration(migrations.Migration):
    """
    Removes the Newsletter model. It duplicated what NewspaperEdition
    already does (a large monthly PDF archive) - the client's actual
    requirement (upload monthly, keep every past edition) is exactly
    NewspaperEdition's existing behavior, so there's no need for two
    separate systems.

    Safe to run whether or not 0002_newsletter has already been applied
    in production - this migration only drops the table, it doesn't try
    to edit migration history.
    """

    dependencies = [
        ('documents', '0002_newsletter'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Newsletter',
        ),
    ]
