from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_detail),
    path('vacancies/', views.VacancyAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', views.VacancyDetailAPIView.as_view()),
    path('companies/<int:company_id>/vacancies/', views.CompanyVacancyAPIView.as_view()),
    path('vacancies/top_ten/', views.top_ten),
]
