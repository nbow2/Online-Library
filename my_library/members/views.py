#from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

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

def C_programming_book(request):
    return render(request, 'members/C_progBook.html')
  
def clean_code_book(request):
    return render(request, 'members/clean_codeBook.html')

def Enceladus_Book(request):
    return render(request, 'members/EnceladusBook.html')

def Kindness_is_my_PowerBook(request):
    return render(request, 'members/Kindness_is_my_PowerBook.html')

def list(request):
    return render(request, 'members/list.html')

def Log_in(request):
    return render(request, 'members/logIN.html')

def Search(request):
    return render(request, 'members/Search.html')

def Sign_up(request):
    return render(request, 'members/signUP.html')

def The_Cat_in_the_hatBook(request):
    return render(request, 'members/The_Cat_in_the_hatBook.html')  
  
