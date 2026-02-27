# Marketing SaaS Platform - Specification

## 1. Project Overview

- **Project Name**: MarketPulse
- **Type**: Marketing Analytics SaaS Platform
- **Core Functionality**: Dashboard for marketing analytics, SEO tools, and data visualization
- **Target Users**: Marketing agencies, business owners, digital marketers
- **Tech Stack**: Next.js + Tailwind (Frontend), Django REST API (Backend), PostgreSQL (Database)

## 2. UI/UX Specification

### Color Palette
- **Primary (Indigo)**: `#6366F1`
- **Accent (Green)**: `#10B981` (for positive metrics)
- **Warning (Amber)**: `#F59E0B`
- **Danger (Red)**: `#EF4444`
- **Background Dark**: `#0F172A`
- **Surface**: `#1E293B`
- **Surface Light**: `#334155`
- **Text Primary**: `#F8FAFC`
- **Text Secondary**: `#94A3B8`
- **Border**: `#475569`

### Typography
- **Headings**: "Inter" (bold, 600-700 weight)
- **Body**: "Inter" (regular, 400 weight)
- **Monospace**: "JetBrains Mono" (for numbers/data)

### Layout Structure

#### Dashboard Layout (Authenticated)
- **Sidebar** (fixed left, 260px wide)
  - Logo
  - Navigation: Dashboard, Analytics, SEO Tools, Reports, Settings
  - User profile at bottom
- **Main Content Area**
  - Top bar with search, notifications, user menu
  - Page content with cards/grids

#### Public Pages (Landing)
- **Header**: Logo, Nav, Login, Get Started button
- **Hero**: Value proposition, CTA
- **Features**: What the platform offers
- **Pricing**: Plans
- **Footer**: Links, social

### Pages

1. **Landing Page** (public)
   - Hero with value proposition
   - Features grid
   - Pricing section
   - CTA to sign up

2. **Login/Register** pages

3. **Dashboard** (authenticated)
   - Overview cards (total visits, conversions, revenue, growth)
   - Line chart for traffic over time
   - Recent activity

4. **Analytics** (authenticated)
   - Detailed metrics
   - Charts (visits, sources, demographics)
   - Date range selector

5. **SEO Tools** (authenticated)
   - Website analyzer input
   - SEO score display
   - Keyword suggestions
   - Technical issues list

6. **Reports** (authenticated)
   - Generate reports
   - Export options
   - Scheduled reports

7. **Settings** (authenticated)
   - Profile settings
   - API keys
   - Team management

### Components
- **Stat Card**: Icon, value, label, change indicator
- **Chart Card**: Title, chart, legend
- **Data Table**: Sortable, paginated
- **Button**: Primary, secondary, ghost variants
- **Input**: Text, email, password, search
- **Select/Dropdown**: For filters
- **Modal**: For confirmations
- **Sidebar Item**: Icon, label, active state

### Responsive Breakpoints
- **Mobile**: < 768px (sidebar becomes drawer)
- **Tablet**: 768px - 1024px (condensed sidebar)
- **Desktop**: > 1024px (full sidebar)

## 3. Functionality Specification

### Core Features

#### Authentication
- Login with email/password
- Register new account
- JWT token-based auth
- Protected routes

#### Dashboard
- Display key metrics (mock data for now)
- Traffic chart visualization
- Quick actions

#### Analytics Module
- Visit tracking visualization
- Traffic sources breakdown
- Geographic data
- Device/browser stats

#### SEO Tools Module
- Website URL analyzer
- SEO score calculation (0-100)
- Meta tags check
- Content analysis
- Technical issues detection

#### Reports Module
- Generate PDF reports (mock)
- View past reports
- Export data

### API Endpoints (Django)

```
POST   /api/auth/register/
POST   /api/auth/login/
GET    /api/auth/me/

GET    /api/dashboard/stats/
GET    /api/dashboard/chart-data/

GET    /api/analytics/visits/
GET    /api/analytics/sources/
GET    /api/analytics/geo/

POST   /api/seo/analyze/
GET    /api/seo/history/

GET    /api/reports/
POST   /api/reports/generate/
```

## 4. Acceptance Criteria

- [ ] Landing page loads with hero, features, pricing
- [ ] Login/Register forms work with validation
- [ ] Dashboard shows stat cards and charts
- [ ] Analytics page shows data visualizations
- [ ] SEO analyzer accepts URL and shows results
- [ ] Sidebar navigation works
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark theme applied consistently
- [ ] Build succeeds without errors

## 5. Project Structure

```
marketing-saas/
├── backend/                    # Django API
│   ├── manage.py
│   ├── requirements.txt
│   ├── marketing_saas/        # Project settings
│   └── api/                   # API app
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       └── serializers.py
├── frontend/                  # Next.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── src/
│       ├── app/
│       │   ├── page.tsx       # Landing
│       │   ├── login/
│       │   ├── register/
│       │   └── dashboard/
│       ├── components/
│       └── lib/
└── docker-compose.yml         # PostgreSQL
```
