from django.db import models
from django.contrib.auth.models import User

class UserType(models.Model):
    IsAdmin =  models.BooleanField(default=False)
    Name = models.CharField(max_length=55)
    email = models.CharField(max_length=55)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=56)
    
    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    usertype = models.ForeignKey(UserType, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username



class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    isbn = models.CharField(max_length=13)
    image_url = models.URLField()
    category = models.CharField(max_length=255)
    year_of_publish = models.IntegerField()
    available = models.BooleanField(default=True)  # Indicates if the book is available for borrowing

    def __str__(self):
        return self.title

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    text_comment = models.TextField()

    def __str__(self):
        return f"Comment by {self.user.username} on {self.book.title}"

class Booking(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    time_borrowed = models.DateTimeField(auto_now_add=True)
    time_returned = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} borrowed {self.book.title}"

    def save(self, *args, **kwargs):
        # Override save method to handle book availability
        if self.book.available:
            self.book.available = False
            self.book.save()
            super().save(*args, **kwargs)
        else:
            WaitingList.objects.create(user=self.user, book=self.book)

class WaitingList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} is waiting for {self.book.title}"

# Add signals to manage the waiting list when a book is returned
from django.db.models.signals import post_save
from django.dispatch import receiver

@receiver(post_save, sender=Booking)
def handle_waiting_list(sender, instance, **kwargs):
    if instance.time_returned:
        instance.book.available = True
        instance.book.save()
        
        # Check if there are users in the waiting list
        waiting = WaitingList.objects.filter(book=instance.book).order_by('created_at').first()
        if waiting:
            Booking.objects.create(user=waiting.user, book=waiting.book)
            waiting.delete()
