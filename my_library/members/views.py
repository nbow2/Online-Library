#from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader

# To Shorthand the code
def render_template(request, template_name):
    template = loader.get_template(template_name)
    return HttpResponse(template.render(request=request))


def Home(request):
    return render_template(request, 'index.html')

def about(request):
    return render_template(request, 'about.html')

def adminADD(request):
    return render_template(request, 'adminADD.html')

def Great_Gatsby(request):
    return render_template(request, 'book.html')
  
  
def Mockingbird(request):
    return render_template(request, 'Book2.html')

def booktime(request):
    return render_template(request, 'booktime.html')

def C_programming_book(request):
    return render_template(request, 'C_progBook.html')
  
def clean_code_book(request):
    return render_template(request, 'clean_codeBook.html')

def Enceladus_Book(request):
    return render_template(request, 'EnceladusBook.html')

def Kindness_is_my_PowerBook(request):
    return render_template(request, 'Kindness_is_my_PowerBook.html')

def list(request):
    return render_template(request, 'list.html')

def Log_in(request):
    return render_template(request, 'logIN.html')

def Search(request):
    return render_template(request, 'Search.html')

def Sign_up(request):
    return render_template(request, 'signUP.html')

def The_Cat_in_the_hatBook(request):
    return render_template(request, 'The_Cat_in_the_hatBook.html')  
  
