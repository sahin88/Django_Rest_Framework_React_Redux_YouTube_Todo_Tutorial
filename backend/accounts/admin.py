from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import Account
from django.contrib.auth import get_user_model
Account = get_user_model()


class AdminUserModel(BaseUserAdmin):
    class Meta:
        model = Account
    list_display = ('email', 'username',)
    list_filter = ()
    fieldsets = (
        (None, {
            'fields': ('email', 'password')
        }),
        ('Personal info', {
            'fields': ('last_login', )
        }),
        ('Permissions', {
            'fields':
            ('username', 'is_admin', 'is_active',
             'is_staff', 'is_superuser')
        }),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = ((None, {
        'classes': ('wide', ),
        'fields': ('email', 'password')
    }), )
    search_fields = ('email', )
    ordering = ('email', )
    filter_horizontal = ()


# admin.site.unregister(Account)

admin.site.register(Account, AdminUserModel)
