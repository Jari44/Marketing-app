from django.urls import path
from . import views

urlpatterns = [
    # Auth
    path('auth/register/', views.register, name='register'),
    path('auth/login/', views.login, name='login'),
    path('auth/me/', views.me, name='me'),
    
    # Dashboard
    path('dashboard/stats/', views.dashboard_stats, name='dashboard_stats'),
    path('dashboard/chart-data/', views.dashboard_chart, name='dashboard_chart'),
    
    # Analytics
    path('analytics/visits/', views.analytics_visits, name='analytics_visits'),
    path('analytics/sources/', views.analytics_sources, name='analytics_sources'),
    path('analytics/geo/', views.analytics_geo, name='analytics_geo'),
    
    # SEO
    path('seo/analyze/', views.seo_analyze, name='seo_analyze'),
    path('seo/history/', views.seo_history, name='seo_history'),
    
    # Reports
    path('reports/', views.reports_list, name='reports_list'),
    path('reports/generate/', views.reports_generate, name='reports_generate'),
]
