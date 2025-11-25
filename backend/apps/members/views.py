from django.contrib.auth.hashers import check_password
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Member
from .serializers import MemberSerializer

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    @action(detail=False, methods=['post'])
    def login(self, request):
        """Login endpoint for steering members"""
        username = request.data.get('username')
        password = request.data.get('password')
        
        try:
            member = Member.objects.get(username=username, role='steering_member')
            if member.password and check_password(password, member.password):
                return Response({
                    'success': True,
                    'member': MemberSerializer(member).data,
                    'message': 'Login successful'
                })
            else:
                return Response({
                    'success': False,
                    'message': 'Invalid credentials'
                }, status=status.HTTP_401_UNAUTHORIZED)
        except Member.DoesNotExist:
            return Response({
                'success': False,
                'message': 'Invalid credentials'
            }, status=status.HTTP_401_UNAUTHORIZED)
