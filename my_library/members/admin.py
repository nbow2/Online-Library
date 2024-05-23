from django.contrib import admin
from .models import UserType, Profile, Book, Comment, Booking, WaitingList

# Register your models here.
admin.site.register(Book)
admin.site.register(UserType)
admin.site.register(Profile)
admin.site.register(Comment)
admin.site.register(Booking)
admin.site.register(WaitingList)