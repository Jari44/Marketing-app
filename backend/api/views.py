from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime, timedelta
import random

# Mock data
MOCK_STATS = {
    "total_visits": 124532,
    "unique_visitors": 45891,
    "conversions": 3421,
    "revenue": 28450,
    "visits_change": 12.5,
    "visitors_change": 8.2,
    "conversions_change": 23.1,
    "revenue_change": -2.4,
}

MOCK_CHART_DATA = [
    {"name": "Mon", "visitors": 4000, "conversions": 240},
    {"name": "Tue", "visitors": 3000, "conversions": 139},
    {"name": "Wed", "visitors": 2000, "conversions": 980},
    {"name": "Thu", "visitors": 2780, "conversions": 390},
    {"name": "Fri", "visitors": 1890, "conversions": 480},
    {"name": "Sat", "visitors": 2390, "conversions": 380},
    {"name": "Sun", "visitors": 3490, "conversions": 430},
]

def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        return JsonResponse({
            "success": True,
            "message": "User registered successfully",
            "user": {"email": data.get("email"), "name": data.get("name", "User")}
        })
    return JsonResponse({"error": "Method not allowed"}, status=405)

def login(request):
    if request.method == "POST":
        data = json.loads(request.body)
        return JsonResponse({
            "success": True,
            "token": "mock_jwt_token_" + str(random.randint(1000, 9999)),
            "user": {"email": data.get("email"), "name": "John Doe"}
        })
    return JsonResponse({"error": "Method not allowed"}, status=405)

def me(request):
    return JsonResponse({
        "user": {
            "email": "john@example.com",
            "name": "John Doe",
            "company": "Acme Inc",
            "plan": "Pro"
        }
    })

def dashboard_stats(request):
    return JsonResponse(MOCK_STATS)

def dashboard_chart(request):
    return JsonResponse({"data": MOCK_CHART_DATA})

def analytics_visits(request):
    return JsonResponse({"visits": MOCK_STATS["total_visits"], "change": MOCK_STATS["visits_change"]})

def analytics_sources(request):
    return JsonResponse({
        "sources": [
            {"name": "Organic Search", "visitors": 45000},
            {"name": "Direct", "visitors": 28000},
            {"name": "Social Media", "visitors": 18000},
            {"name": "Referral", "visitors": 12000},
            {"name": "Email", "visitors": 8000},
        ]
    })

def analytics_geo(request):
    return JsonResponse({
        "countries": [
            {"country": "United States", "visitors": 45000, "percentage": 36},
            {"country": "United Kingdom", "visitors": 18000, "percentage": 14},
            {"country": "Germany", "visitors": 12000, "percentage": 10},
            {"country": "France", "visitors": 9000, "percentage": 7},
            {"country": "Other", "visitors": 40500, "percentage": 33},
        ]
    })

@csrf_exempt
def seo_analyze(request):
    if request.method == "POST":
        data = json.loads(request.body)
        url = data.get("url", "")
        
        # Generate mock SEO analysis
        score = random.randint(60, 95)
        
        return JsonResponse({
            "url": url,
            "score": score,
            "issues": [
                {"type": "error", "category": "Performance", "message": "Image sizes not optimized", "fix": "Compress images to WebP format"},
                {"type": "warning", "category": "SEO", "message": "Meta description too short", "fix": "Add more descriptive meta description"},
                {"type": "success", "category": "Accessibility", "message": "Alt tags present on all images", "fix": None},
                {"type": "success", "category": "Performance", "message": "Server response time is good", "fix": None},
                {"type": "warning", "category": "SEO", "message": "Missing H1 tag", "fix": "Add an H1 heading to the page"},
                {"type": "error", "category": "Security", "message": "HTTPS not enforced", "fix": "Enable HTTPS redirect"},
            ],
            "keywords": [
                {"keyword": "marketing analytics", "volume": 12100, "difficulty": "Medium"},
                {"keyword": "seo tools", "volume": 8200, "difficulty": "Medium"},
                {"keyword": "digital marketing", "volume": 22400, "difficulty": "Hard"},
                {"keyword": "marketing dashboard", "volume": 3600, "difficulty": "Easy"},
            ]
        })
    return JsonResponse({"error": "Method not allowed"}, status=405)

def seo_history(request):
    return JsonResponse({
        "history": [
            {"url": "https://example.com", "score": 78, "date": "2026-02-20"},
            {"url": "https://example.com", "score": 72, "date": "2026-02-15"},
        ]
    })

def reports_list(request):
    return JsonResponse({
        "reports": [
            {"id": 1, "name": "Monthly Analytics Report", "type": "Analytics", "date": "2026-02-20", "size": "2.4 MB"},
            {"id": 2, "name": "SEO Performance Q1", "type": "SEO", "date": "2026-02-18", "size": "1.8 MB"},
            {"id": 3, "name": "Traffic Analysis - January", "type": "Analytics", "date": "2026-02-01", "size": "3.1 MB"},
        ]
    })

@csrf_exempt
def reports_generate(request):
    if request.method == "POST":
        data = json.loads(request.body)
        return JsonResponse({
            "success": True,
            "report": {
                "id": random.randint(100, 999),
                "name": data.get("name", "New Report"),
                "type": data.get("type", "Analytics"),
                "date": datetime.now().strftime("%Y-%m-%d"),
                "size": f"{random.uniform(1, 5):.1f} MB"
            }
        })
    return JsonResponse({"error": "Method not allowed"}, status=405)
