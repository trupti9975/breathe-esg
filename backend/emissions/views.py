from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import EmissionRecord
from .serializers import EmissionRecordSerializer
import pandas as pd

@api_view(['GET'])
def get_records(request):
    records = EmissionRecord.objects.all()
    serializer = EmissionRecordSerializer(records, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_record(request):
    serializer = EmissionRecordSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

    return Response(serializer.errors)

@api_view(['POST'])
def upload_csv(request):

    file = request.FILES['file']

    df = pd.read_csv(file)

    for index, row in df.iterrows():

        EmissionRecord.objects.create(
            source_type=row['source_type'],
            category=row['category'],
            quantity=row['quantity'],
            unit=row['unit'],
            status='FLAGGED' if row['quantity'] > 1000 else 'PENDING'
        )
@api_view(['PUT'])
def update_status(request, id):

    record = EmissionRecord.objects.get(id=id)

    record.status = request.data['status']

    record.save()

    return Response({"message": "Status updated"})

    return Response({"message": "CSV uploaded successfully"})
import pandas as pd