# Generated by Django 4.1.4 on 2022-12-21 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("fscohort", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="student",
            name="first_name",
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name="student",
            name="number",
            field=models.PositiveSmallIntegerField(blank=True, null=True),
        ),
    ]
