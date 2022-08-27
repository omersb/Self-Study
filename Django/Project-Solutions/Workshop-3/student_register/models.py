from django.db import models

# Create your models here.


class Student(models.Model):
    fullname = models.CharField(max_length=50)
    number = models.IntegerField()
    mobile = models.IntegerField()
    email = models.EmailField(max_length=254)

    GENDER = (
        ('Female', 'Female'),
        ('Male', 'Male'),
        ('Other', 'Other'),
        ('Prefer', 'Prefer not to say')
    )
    gender = models.CharField(max_length=50, choices=GENDER)

    PATH = (
        ('Full Stack', 'Full Stack'),
        ('Data Science', 'Data Science'),
        ('DevOps', 'DevOps'),
        ('AWS', 'AWS'),
        ('ITF', 'ITF')

    )
    path = models.CharField(max_length=50, choices=PATH)

    def __str__(self):
        return self.fullname
