from django.urls import path, include
from .views import student_add_update, student_delete, student_list

urlpatterns = [
    # get and post req.for insert operation
    path('', student_add_update, name='student_add_update'),
    # get and post req. for update operation
    path('<int:id>/', student_add_update, name='student_update'),
    path('delete/<int:id>/', student_delete, name='student_delete'),
    # get req. to retrieve and display all records
    path('list/', student_list, name='student_list')
]
