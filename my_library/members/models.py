from django.db import models

class Member(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  phone = models.IntegerField(null=True)
  joined_date = models.DateField(null=True)


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    year_of_publish = models.IntegerField()
    category = models.CharField(max_length=100)
    description = models.TextField()
    isbn = models.CharField(max_length=13)
    image_url = models.URLField(max_length=2000)

    def __str__(self):
        return self.title