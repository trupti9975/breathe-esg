from django.db import models

class EmissionRecord(models.Model):
    source_type = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    quantity = models.FloatField()
    unit = models.CharField(max_length=20)
    status = models.CharField(max_length=20, default='PENDING')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.source_type