# Generated by Django 4.1.4 on 2022-12-21 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fscohort', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='student',
            options={'ordering': ('-number',), 'verbose_name': 'Öğrenci', 'verbose_name_plural': 'Öğrenciler'},
        ),
    ]
