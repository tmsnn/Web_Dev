import json

from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse, HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Company, Vacancy
from .serializers import CompanySerializer1, CompanySerializer2, VacancySerializer2


def home(request):
    return HttpResponse('home page')

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        categories = Company.objects.all()
        serializer = CompanySerializer1(categories, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = CompanySerializer2(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        serializer = CompanySerializer2(company)
        return Response(serializer.data)

    if request.method == 'PUT':
        try:
            instance = Company.objects.get(pk=id)
            serializer = CompanySerializer2(instance=instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Company.DoesNotExist:
            return JsonResponse({id: "Not found"})
    elif request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})



class VacancyAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer2(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        try:
            vacancy_company = Company.objects.get(id=data.get('company', ''))
            sal = data.get('salary', '')
            desc = data.get('description', '')
            vacancy = Vacancy.objects.create(name=vacancy_name, company=vacancy_company, salary=sal, description=desc)
            return Response(vacancy.to_json())

        except:
            return JsonResponse({"Error": "invalid input"})


class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(pk=vacancy_id)
        except Vacancy.DoesNotExist as e:
            return Response(str(e), status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        serializer = VacancySerializer2(instance)
        return Response(serializer.data)

    def put(self, request, vacancy_id):
        try:
            instance = self.get_object(vacancy_id)
            serializer = VacancySerializer2(instance=instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            return JsonResponse({vacancy_id: "Not found"})

    def delete(self, request, vacancy_id):
        instance = self.get_object(vacancy_id)
        try:
            instance.delete()
            return Response({'deleted': True})
        except:
            return JsonResponse({vacancy_id: "Not found"})


class CompanyVacancyAPIView(APIView):
    def get(self, request, company_id):
        vacanc = Vacancy.objects.filter(company=company_id)
        serializer = VacancySerializer2(vacanc, many=True)
        return Response(serializer.data)


def top_ten(request):
    vacanc = list(Vacancy.objects.values().order_by('-salary'))[:10]
    return JsonResponse(vacanc, safe=False, json_dumps_params={'indent': 2})
