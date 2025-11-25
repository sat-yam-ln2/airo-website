from django.db import models

class Leader(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=100)  # Community Lead, AI Tech Lead...
    bio = models.TextField()
    photo = models.ImageField(upload_to='leaders/')
    order = models.IntegerField(default=0)  # Display order

    def __str__(self):
        return self.name

class Event(models.Model):
    EVENT_TYPES = [
        ('workshop', 'Workshop'),
        ('competition', 'Competition'),
        ('seminar', 'Seminar'),
        ('hackathon', 'Hackathon'),
    ]

    STATUS_CHOICES = [
        ('upcoming', 'Upcoming'),
        ('ongoing', 'Ongoing'),
        ('completed', 'Completed'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    description = models.TextField()
    event_type = models.CharField(max_length=50, choices=EVENT_TYPES)
    date = models.DateField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title
