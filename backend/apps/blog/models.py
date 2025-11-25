from django.db import models
from apps.members.models import Member

class Category(models.Model):
    name = models.CharField(max_length=100)  # AI, Robotics, IoT, Events
    slug = models.SlugField(unique=True)
    color_code = models.CharField(max_length=7)  # Hex color

    def __str__(self):
        return self.name

class Post(models.Model):
    title = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(Member, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    
    excerpt = models.TextField(max_length=500)
    content = models.TextField()  # Markdown format
    featured_image = models.ImageField(upload_to='blog/')
    
    published_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    views_count = models.IntegerField(default=0)
    is_featured = models.BooleanField(default=False)

    def __str__(self):
        return self.title
