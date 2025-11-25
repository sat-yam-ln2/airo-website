from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, Post
from .serializers import CategorySerializer, PostSerializer
from apps.members.models import Member

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('-published_at')
    serializer_class = PostSerializer

    def create(self, request, *args, **kwargs):
        """Only steering members can create posts"""
        member_id = request.data.get('member_id')
        try:
            member = Member.objects.get(id=member_id, role='steering_member')
            # Set the author automatically
            request.data['author'] = member.id
            return super().create(request, *args, **kwargs)
        except Member.DoesNotExist:
            return Response({
                'error': 'Only steering members can create posts'
            }, status=status.HTTP_403_FORBIDDEN)

    def update(self, request, *args, **kwargs):
        """Only steering members can update posts"""
        member_id = request.data.get('member_id')
        try:
            Member.objects.get(id=member_id, role='steering_member')
            return super().update(request, *args, **kwargs)
        except Member.DoesNotExist:
            return Response({
                'error': 'Only steering members can update posts'
            }, status=status.HTTP_403_FORBIDDEN)

    def destroy(self, request, *args, **kwargs):
        """Only steering members can delete posts"""
        member_id = request.query_params.get('member_id')
        try:
            Member.objects.get(id=member_id, role='steering_member')
            return super().destroy(request, *args, **kwargs)
        except Member.DoesNotExist:
            return Response({
                'error': 'Only steering members can delete posts'
            }, status=status.HTTP_403_FORBIDDEN)
