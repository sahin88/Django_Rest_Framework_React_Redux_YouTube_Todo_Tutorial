from django.db import models
from django.contrib.auth import get_user_model
#from django.contrib.auth.models import User

Account = get_user_model()


class Articles(models.Model):
    title = models.CharField(max_length=200)
    author = models.TextField(max_length=200)
    # onetomany
    user = models.ForeignKey(Account, default=1, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="articles/%Y/%m/%d")

    def __str__(self):
        return self.title

    def delete(self, *args, **kwargs):
        self.image.delete()
        super().delete(*args, **kwargs)
