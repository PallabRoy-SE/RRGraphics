# Generated by Django 3.1.3 on 2020-12-12 14:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('product_id', models.AutoField(primary_key=True, serialize=False)),
                ('product_title', models.CharField(max_length=100)),
                ('product_author', models.CharField(max_length=16)),
                ('product_description', models.TextField()),
                ('publish_date', models.DateTimeField(auto_now_add=True)),
                ('video_id', models.CharField(max_length=11)),
                ('product_category', models.CharField(max_length=100)),
                ('product_subcategory', models.CharField(max_length=100)),
                ('download_link', models.TextField()),
                ('product_views', models.IntegerField(default=0)),
            ],
        ),
    ]
