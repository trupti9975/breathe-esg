from .views import get_records, add_record, upload_csv, update_status
from django.urls import path
from .views import get_records, add_record

urlpatterns = [
    path('records/', get_records),
    path('add/', add_record),
    path('upload/', upload_csv),
    path('update/<int:id>/', update_status),
]