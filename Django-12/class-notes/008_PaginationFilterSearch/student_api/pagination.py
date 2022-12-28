from rest_framework.pagination import (
    PageNumberPagination
)


class CustomPageNumberPagination(PageNumberPagination):
    page_size = 5
    page_query_param = 'sayfa'
