# Generated by Django 3.1.3 on 2020-12-14 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='last_update_date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
