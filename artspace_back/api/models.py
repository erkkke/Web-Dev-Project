from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class MyUser(models.Model):
    user = models.OneToOneField(User, related_name='userprofile', on_delete=models.CASCADE)

    banner = models.URLField(blank=True)
    photo = models.URLField(blank=True)
    desc = models.TextField(blank=True)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def to_json(self):
        return {
            'id': self.user.id,
            'username': self.user.username,
            # "password": self.user.check_password;
            "banner": self.banner,
            "photo": self.photo,
            "email": self.email,
            "desc": self.desc,
        }

    def __str__(self):
        return f'{self.user.username}#{self.id}'
