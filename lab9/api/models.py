from django.db import models

class Company(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextFields()
    city=models.CharField(max_length=255)
    address=models.TextFields()

    def to_json(self):
        return {
            'id': self.id,
            'name':self.name,
            'description':self.description,
            'city': self.city,
            'address':self.address
        }


class Vacancy(models.Model):
    name=models.CharField(max_length=255)
    description=models.TextFields()
    salary=models.IntegerField()
    company=models.ForeignKey(Company, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id':self.id,
            'name':self.name,
            'description':self.description,
            'salary':self.salary,
        }
