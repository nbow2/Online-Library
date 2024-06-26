from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name='Home'),
    path('book/<int:book_id>/', views.book_details, name='book_details'),
    path('add_comment/<int:book_id>/', views.add_comment, name='add_comment'),
    path('api/books/', views.books_api, name='books_api'),
    # this path is not handld yat 

    path('404/', views.error_404, name='404'),
    path('about/', views.about, name='about'),
    path('adminADD/', views.adminADD, name='adminADD'),
    path('booktime/<int:book_id>/', views.booktime, name='booktime'),
    path('list/', views.list, name='list'),
    path('success_reserved/<int:book_id>/' , views.success_reserved , name = 'success_reserved'),
    path('Search/', views.Search, name='Search'),
    path('search/', views.search_books, name='search_books'),
    path('waiting_list/<int:book_id>/' , views.waiting_list , name = 'waiting_list'),
    path('Log_in/', views.log_in, name='Log_in'),
    path('Sign_up/', views.Sign_up, name='Sign_up'),
    path('account/', views.account, name='account'),

    #the admin roleplay 
    path('add/', views.add_book, name='add_book'),
    path('delete/<int:book_id>/', views.delete_book, name='delete_book'),
    path('update/<int:book_id>/', views.update_book, name='update_book'),
    path('AdminRolePlay', views.book_list, name='book_list'),
    path('books/', views.book_management, name='book_management'),

    #---------------------------- this will deleted from the project----------------------------------
    path('C_programming_book/', views.C_programming_book, name='C_programming_book'),
    path('clean_code_book/', views.clean_code_book, name='clean_code_book'),
    path('Enceladus_Book/', views.Enceladus_Book, name='Enceladus_Book'),
    path('Kindness_is_my_PowerBook/', views.Kindness_is_my_PowerBook, name='Kindness_is_my_PowerBook'),
    path('The_Cat_in_the_hatBook/', views.The_Cat_in_the_hatBook, name='The_Cat_in_the_hatBook'),
    path('Great_Gatsby/', views.Great_Gatsby, name='Great_Gatsby'),
    path('Mockingbird/', views.Mockingbird, name='Mockingbird'),
    #-------------------------------------------------------------------------------------------------
]

