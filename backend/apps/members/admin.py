from django.contrib import admin
from .models import Member

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'email', 'role', 'status', 'applied_at']
    list_filter = ['role', 'status', 'skill_category']
    search_fields = ['full_name', 'email', 'student_id']
    readonly_fields = ['applied_at', 'reviewed_at']
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('full_name', 'email', 'phone', 'student_id', 'year_level')
        }),
        ('Authentication', {
            'fields': ('username', 'role'),
            'description': 'Set username for steering members. Password must be set separately.'
        }),
        ('Skills', {
            'fields': ('skill_category', 'skill_level', 'hours_per_month')
        }),
        ('Application', {
            'fields': ('motivation', 'portfolio_link', 'status', 'applied_at', 'reviewed_at')
        }),
        ('Metadata', {
            'fields': ('attendance_percentage', 'is_core_member')
        }),
    )
    
    def save_model(self, request, obj, form, change):
        # If creating a new steering member, prompt admin to set password separately
        if not change and obj.role == 'steering_member' and not obj.password:
            # Admin should use Django shell or custom action to set password
            pass
        super().save_model(request, obj, form, change)
    
    actions = ['set_as_steering_member', 'set_as_general_member', 'approve_member']
    
    def set_as_steering_member(self, request, queryset):
        queryset.update(role='steering_member')
    set_as_steering_member.short_description = "Set as Steering Member"
    
    def set_as_general_member(self, request, queryset):
        queryset.update(role='general_member')
    set_as_general_member.short_description = "Set as General Member"
    
    def approve_member(self, request, queryset):
        queryset.update(status='approved')
    approve_member.short_description = "Approve selected members"
