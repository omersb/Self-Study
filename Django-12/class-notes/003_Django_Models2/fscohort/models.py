from django.db import models

# Create your models here.


class Student(models.Model):
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=40)
    number = models.PositiveSmallIntegerField(blank=True)

    # about = models.TextField(blank=True, null=True)
    # register = models.DateTimeField(auto_now_add=True)
    # last_updated_date = models.DateTimeField(auto_now=True)
    # is_active = models.BooleanField()
