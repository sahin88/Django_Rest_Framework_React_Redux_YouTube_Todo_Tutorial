from django.contrib import admin
from .models import Articles


class articleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'user')
    list_display_links = ('title',)
    search_fields = ('titles', 'author')
    list_per_page = 25


admin.site.register(Articles, articleAdmin)
