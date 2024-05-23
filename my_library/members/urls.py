from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='Home'),
   
    # this path is not handld yat 
path('book/<int:book_id>/', views.book_details, name='book_details'),
    # path('api/books/', views.books_api, name='books_api'),

    path('about/', views.about, name='about'),
    path('adminADD/', views.adminADD, name='adminADD'),
    path('Great_Gatsby/', views.Great_Gatsby, name='Great_Gatsby'),
    path('Mockingbird/', views.Mockingbird, name='Mockingbird'),
    path('booktime/', views.booktime, name='booktime'),
    path('C_programming_book/', views.C_programming_book, name='C_programming_book'),
    path('clean_code_book/', views.clean_code_book, name='clean_code_book'),
    path('Enceladus_Book/', views.Enceladus_Book, name='Enceladus_Book'),
    path('Kindness_is_my_PowerBook/', views.Kindness_is_my_PowerBook, name='Kindness_is_my_PowerBook'),
    path('list/', views.list, name='list'),
    path('Log_in/', views.Log_in, name='Log_in'),
    path('success_reserved/' , views.SuccessReservatino , name = 'success_reserved'),

    path('Search/', views.Search, name='Search'),
    path('search/', views.search_books, name='search_books'),

    path('Sign_up/', views.Sign_up, name='Sign_up'),
    path('The_Cat_in_the_hatBook/', views.The_Cat_in_the_hatBook, name='The_Cat_in_the_hatBook'),
    path('account/', views.account, name='account'),

    #the admin roleplay 
      path('add/', views.add_book, name='add_book'),
    path('delete/<int:book_id>/', views.delete_book, name='delete_book'),
    path('update/<int:book_id>/', views.update_book, name='update_book'),
    path('AdminRolePlay', views.book_list, name='book_list'),
     path('books/', views.book_management, name='book_management')
 

    
]

