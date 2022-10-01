from django.urls import path
from .views import TodoCreate, TodoCreateList, TodoDelete,TodoUpdate, is_completed, todo_create, todo_update, todo_delete,TodoList
from django.views.generic import ListView
from .models import Todo

urlpatterns = [
    # path("", home, name="home"),
    path('',TodoCreateList.as_view(),name="home"),
    path("add/", todo_create, name="add"),
    path('adds/', TodoCreate.as_view()),
    path('list/',TodoList.as_view(),name="list"),
    path('lists/', ListView.as_view(model = Todo,context_object_name = 'todos')),#viewe uğramadan burada oluşturabiliyoruz
    # path("update/<int:id>", todo_update, name="update"),
    path('updates/<int:pk>', TodoUpdate.as_view(),name="update"),
    # path("delete/<int:id>", todo_delete, name="delete"),
    path('deletes/<int:pk>', TodoDelete.as_view(),name="delete"),
    path('done/<int:id>',is_completed,name="done"),
]
