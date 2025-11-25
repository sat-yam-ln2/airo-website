from django.db import models
from django.contrib.auth.hashers import make_password

class Member(models.Model):
    SKILL_CHOICES = [
        ('ai', 'AI Skills'),
        ('robotics', 'Robotics/IoT Skills'),
        ('content', 'Digital Content/Editing'),
        ('research', 'Research & Writing'),
    ]

    LEVEL_CHOICES = [
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]

    ROLE_CHOICES = [
        ('general_member', 'General Member'),
        ('steering_member', 'Steering Member'),
    ]

    # Basic Info
    full_name = models.CharField(max_length=200)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    student_id = models.CharField(max_length=50)
    year_level = models.CharField(max_length=50)
    
    # Authentication (for steering members)
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    password = models.CharField(max_length=128, null=True, blank=True)
    
    # Role
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='general_member')
    
    # Skills
    skill_category = models.CharField(max_length=50, choices=SKILL_CHOICES)
    skill_level = models.CharField(max_length=50, choices=LEVEL_CHOICES)
    hours_per_month = models.IntegerField()
    
    # Motivation
    motivation = models.TextField()
    portfolio_link = models.URLField(blank=True)
    
    # Status
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    applied_at = models.DateTimeField(auto_now_add=True)
    reviewed_at = models.DateTimeField(null=True, blank=True)
    
    # Metadata
    attendance_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    is_core_member = models.BooleanField(default=False)

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def __str__(self):
        return f"{self.full_name} ({self.role})"

