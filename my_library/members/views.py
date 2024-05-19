#from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render , redirect, get_object_or_404
from .models import Book
from .forms import BookForm
from django.http import JsonResponse


# To Shorthand the code
# def render_template(request, template_name):
#     template = loader.get_template(template_name)
#     return HttpResponse(template.render(request=request))


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
    return render(request, 'members/logIN.html')

def Search(request):
    return render(request, 'members/Search.html')

def Sign_up(request):
    return render(request, 'members/signUP.html')


#this books will be delete 

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