# Generated by Django 5.0.4 on 2024-05-19 09:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0003_book'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='year_of_publish',
            field=models.DateField(verbose_name=''),
        ),
    ]
