from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Newsletter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='newsletter/')),
                ('title', models.CharField(default='Newsletter', max_length=200)),
                ('is_active', models.BooleanField(default=True)),
                ('uploaded_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ['-uploaded_at'],
            },
        ),
    ]
