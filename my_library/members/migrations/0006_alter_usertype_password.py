# Generated by Django 5.0.6 on 2024-05-19 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('members', '0005_booking_comment_profile_usertype_waitinglist_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usertype',
            name='password',
            field=models.CharField(max_length=200),
        ),
    ]
