from django.db import models
from django.contrib.auth.models import User
# from djongo import models #add for mongo db

# Create your models here.
class Product(models.Model):
    product_id = models.AutoField(primary_key=True)
    product_title = models.CharField(max_length=100)
    product_user = models.ForeignKey(User, on_delete=models.CASCADE)
    product_description = models.TextField()
    publish_date = models.DateTimeField(auto_now_add=True, blank=True)
    last_update_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    video_id = models.CharField(max_length=11)
    product_category = models.CharField(max_length=100)
    product_subcategory = models.CharField(max_length=100)
    download_link = models.TextField()
    product_views = models.IntegerField(default=0)

    def __str__(self):
        return self.product_title
    