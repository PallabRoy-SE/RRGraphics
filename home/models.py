from django.db import models
from django.contrib.auth.models import User
# from djongo import models #add for mongo db

# Create your models here.
# extend user profile model
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to='images/profiles', default="")
    banner_image = models.ImageField(upload_to='images/banners', default="")
    last_update_date = models.DateTimeField(auto_now_add=True, blank=True, null=True)

    def __str__(self):
        return self.user.first_name

# contact model
class Contact(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    phone = models.CharField(max_length=14)
    msg = models.TextField(max_length=1000)

    def __str__(self):
        return self.msg[0:50] + "... By " + self.name