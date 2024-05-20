#from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render , redirect, get_object_or_404
from .models import Book , UserType , Profile
from .forms import BookForm 
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.hashers import make_password # for hashing

# To Shorthand the code
# def render_template(request, template_name):
#     template = loader.get_template(template_name)
#     return HttpResponse(template.render(request=request))

def account(request):
    return render(request, 'members/account.html')

def Home(request):
    return render(request, 'members/index.html')

def about(request):
    return render(request, 'members/about.html')

def adminADD(request):
    return render(request, 'members/adminADD.html')

def Great_Gatsby(request):
    return render(request, 'members/book.html')
  
def Mockingbird(request):
    return render(request, 'members/Book2.html')

def booktime(request):
    return render(request, 'members/booktime.html')

def list(request):
    return render(request, 'members/list.html')

def Log_in(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        hashPassword = make_password(password)
        
        result = None
        users = UserType.objects.all()
        
        for i in users:
            if(i.username == username and i.password == password):
                result = i
                break
            
        if result is not None:
            # login(request, result)
            return redirect('Home')
        else:
            return render(request, 'members/logIN.html', {'error_message': 'Invalid credentials'})
    else:
        return render(request, 'members/logIN.html')

def Search(request):
    return render(request, 'members/Search.html')
    
    
    
def Sign_up(request):
    if request.method == 'POST':
        # Extract form data from POST request
        Name = request.POST.get('name')
        email = request.POST.get('email')
        username = request.POST.get('username')
        password = request.POST.get('password')
        rePassword = request.POST.get('repassword')
        userType = request.POST.get('usertype')
        
        if password != rePassword:
            messages.error(request, "Password doesn't match the confirmation")
            return render(request, 'members/signUP.html')  
        
        HashingPassword = make_password(password)

        if Name and email and username and password and rePassword and userType:
            user = UserType()
            user.username = username
            user.Name = Name
            user.email = email
            user.password = password
            user.IsAdmin = userType.lower() == 'admin'  
            user.save()
            messages.success(request, "User created successfully")
            return redirect('Log_in')    
        else:
            # messages.error(request, "Please fill in all required fields")
            return render(request, 'members/signUP.html')  

    return render(request, 'members/signUP.html')

def C_programming_book(request):
    return render(request, 'members/C_progBook.html')
  
def clean_code_book(request):
    return render(request, 'members/clean_codeBook.html')

def Enceladus_Book(request):
    return render(request, 'members/EnceladusBook.html')

def Kindness_is_my_PowerBook(request):
    return render(request, 'members/Kindness_is_my_PowerBook.html')

def The_Cat_in_the_hatBook(request):
    return render(request, 'members/The_Cat_in_the_hatBook.html')  
  


# admin roleplay will use this methods



def book_list(request):
    # Retrieve all books from the database
    books = Book.objects.all()
    print(books)
    # Render the adminADD.html template and pass the list of books to the template context
    return render(request, 'members/adminADD.html', {'books': books})


def add_book(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        author = request.POST.get('author')
        year_of_publish = request.POST.get('year_of_publish')
        category = request.POST.get('category')
        description = request.POST.get('description')
        isbn = request.POST.get('isbn')
        image_url = request.POST.get('image_url')

        book = Book(title=title, author=author, year_of_publish=year_of_publish, category=category, description=description, isbn=isbn, image_url=image_url)
        book.save()
        return JsonResponse({'success': True})
    return JsonResponse({'success': False})

def delete_book(request, book_id):
    if request.method == 'POST':
        try:
            book = Book.objects.get(id=book_id)
            book.delete()
            return JsonResponse({'success': True})
        except Book.DoesNotExist:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False})

def update_book(request, book_id):
    if request.method == 'POST':
        try:
            book = Book.objects.get(id=book_id)
            book.title = request.POST.get('title')
            book.author = request.POST.get('author')
            book.year_of_publish = request.POST.get('year_of_publish')
            book.category = request.POST.get('category')
            book.description = request.POST.get('description')
            book.isbn = request.POST.get('isbn')
            book.image_url = request.POST.get('image_url')
            book.save()
            return JsonResponse({'success': True})
        except Book.DoesNotExist:
            return JsonResponse({'success': False})
    return JsonResponse({'success': False})

def book_management(request):
    if request.method == 'POST':
        # If the form is submitted
        form = BookForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('book_management')
    else:
        # If the page is accessed via GET request
        form = BookForm()

    # Get all books from the database
    books = Book.objects.all()

    # Render the template with the form and book data
    return render(request, 'members/book_management.html', {'form': form, 'books': books})