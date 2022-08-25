# Generated by Django 4.1 on 2022-08-22 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("fscohort", "0002_alter_student_options"),
    ]

    operations = [
        migrations.AddField(
            model_name="student",
            name="about",
            field=models.TextField(blank=True, null=True, verbose_name="Hakkinda"),
        ),
        migrations.AddField(
            model_name="student",
            name="avatar",
            field=models.ImageField(
                blank=True, null=True, upload_to="media/", verbose_name="Resim"
            ),
        ),
    ]