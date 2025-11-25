from rest_framework import viewsets
from .models import Leader, Event
from .serializers import LeaderSerializer, EventSerializer

class LeaderViewSet(viewsets.ModelViewSet):
    queryset = Leader.objects.all()
    serializer_class = LeaderSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
