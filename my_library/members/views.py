#from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render , redirect, get_object_or_404
from .models import Book  , Profile , User , UserType, Comment , WaitingList ,handle_waiting_list
#for the Q 
from django.db.models import Q  # Import Q here
from django.shortcuts import get_object_or_404
from .forms import BookForm 
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.views.decorators.csrf import csrf_protect
from django.contrib import messages
from django.contrib.auth.hashers import make_password # for hashing
from django.db.models.signals import post_save
from django.template.loader import render_to_string
from django.conf import settings
import os

from django.contrib.auth.decorators import login_required


@login_required
def add_comment(request, book_id):
    if request.method == 'POST':
        user = request.user
        book = get_object_or_404(Book, id=book_id)
        text = request.POST.get('text_comment')

        comment = Comment.objects.create(user=user, book=book, text_comment=text)
        comment.save()

        return JsonResponse({'success': True, 'username': user.username, 'comment': text})

    return JsonResponse({'success': False}, status=400)


def book_details(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    comments = Comment.objects.filter(book=book).order_by('-id')
    selected_book_id = book_id
    return render(request, 'members/book_details.html', {'book': book, 'comments': comments})
# To Shorthand the code
# def render_template(request, template_name):
#     template = loader.get_template(template_name)
#     return HttpResponse(template.render(request=request))

def account(request):
    return render(request, 'members/account.html')



# to show all the books from the database
def home(request):
    books = Book.objects.all()
    return render(request, 'members/index.html', {'books': books})

#this also not handed yat 
# path('book/<int:id>/', views.book_detail, name='book_detail'),
# def book_detail(request):
   # return render(request ,'members/index.html' )

def books_api(request):
    books = Book.objects.all().values('title', 'image_url', 'id')
    return JsonResponse(list(books), safe=False)

# def book_details(request, isbn):
  #  book = get_object_or_404(Book, pk=isbn)
   # return render(request, 'members/book_details.html', {'book': book})


def generate_html_pages_for_books():
    books = Book.objects.all()
    output_dir = os.path.join(settings.BASE_DIR, 'generated_books')
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    for book in books:
        rendered_html = render_to_string('members/book_details.html', {'book': book})
        output_path = os.path.join(output_dir, f'book_{book.id}.html')
        with open(output_path, 'w', encoding='utf-8') as file:
            file.write(rendered_html)


def about(request):
    return render(request, 'members/about.html')

def adminADD(request):
    return render(request, 'members/adminADD.html')

def Great_Gatsby(request):
    return render(request, 'members/book.html')
  
def Mockingbird(request):
    return render(request, 'members/Book2.html')



def wating_list(request , book_id):
    if request.user.is_authenticated:
        book = get_object_or_404(Book, pk=book_id)
        wating_list =  WaitingList()
        wating_list.book = book
        user = get_object_or_404(UserType, pk=book_id)
        wating_list.user = user
        handle_waiting_list(user , book)
    else:
        return render(request , 'members/error.html')


    
def success_reserved(request , book_id):
    if request.user.is_authenticated:
        book = get_object_or_404(Book, pk=book_id)
        return render(request , 'members/successReservation.html' , {
            'reserved_book' : book
        })
    else:
        return render(request , 'members/error.html')
    

def booktime(request , book_id):
    if request.user.is_authenticated:
        book = get_object_or_404(Book, pk=book_id)
        if(book.available):
            book.available = False
            return render(request , 'members/watingList.html' , {
                'reserved_book' : book,
            } )
        else:    
            return render(request, 'members/booktime.html' , {
                'reserved_book' : book,
            })
    return render(request,'members/error.html')

def list(request):
    return render(request, 'members/list.html')

@csrf_protect
def Log_in(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
       
        try:
            users = UserType.objects.all()
            
            user = None
            for i in users:
                user = (i.username == username and i.password == password)
            if(user is not None):
                return redirect('Home')
            else:
                messages.error(request, 'Invalid credentials')
                return redirect(request, 'members/logIN.html')
        except User.DoesNotExist:
            messages.error(request, 'Invalid credentials')
            return render(request, 'members/logIN.html')
    else:
        return render(request, 'members/logIN.html')



def Search(request):
    return render(request, 'members/Search.html')

#this the new function tosearch from database 
def search_books(request):
    query = request.GET.get('q', '')
    if query:
        books = Book.objects.filter(
            Q(title__icontains=query) | 
            Q(author__icontains=query) |
            Q(category__icontains=query)
        )
    else:
        books = Book.objects.all()  # Display all books when there's no search query
    
    context = {
        'books': books,
        'query': query,
    }
    return render(request, 'members/search.html', context)
        
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
            user = UserType(
                Name=Name,
                email=email,
                username=username,
                password=HashingPassword,
                IsAdmin=userType.lower() == 'admin'
            )
            user.save()
            profile = Profile(
                user=user,
                userType=userType.lower() == 'admin',
                name=Name,
            )
            profile.save()
            messages.success(request, f"User created successfully for {username} :)")
            return redirect('Log_in')
        else:
            messages.error(request, "Please fill out all fields")
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