# Islington AIRO Club Website
## 🚀 Features

### Public Features
- **Landing Page**: Interactive hero section with matrix rain animation, mission/vision, activities grid, leadership showcase, events teaser, and statistics
- **About Us**: Club story, objectives, leadership team, mentors section
- **Blog**: Searchable blog posts with category filtering and detailed post views
- **Membership Form**: Multi-step application form with validation

### Admin Features (Steering Members Only)
- **Authentication**: Secure login system for steering members
- **Blog Management**: Full CRUD operations for blog posts
- **Dashboard**: Overview of all published posts with edit/delete capabilities
- **Post Editor**: Rich text editor with Markdown support and category management

## 🛠 Tech Stack

### Frontend
- **React 18** with Vite
- **React Router DOM** for navigation
- **Axios** for API calls
- **Framer Motion** for animations
- **React Hook Form** for form management
- **React Markdown** for blog content rendering
- **Google Material Icons** for premium iconography
- **Vanilla CSS** with CSS custom properties

### Backend
- **Django 5.x** with Django REST Framework
- **SQLite3** database
- **drf-yasg** for API documentation (Swagger)
- **CORS Headers** for cross-origin requests
- **Pillow** for image handling

## 📋 Prerequisites

- Python 3.13+
- Node.js 16+
- npm or yarn

## ⚙️ Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate a virtual environment:
```bash
python -m venv .venv
.venv\Scripts\activate  # Windows
```

3. Install dependencies:
```bash
pip install django djangorestframework django-cors-headers pillow drf-yasg
```

4. Run migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. Create a superuser (for Django admin):
```bash
python manage.py createsuperuser
```

6. Start the development server:
```bash
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 👥 Role-Based Access

### General Members
- Can apply for membership through the application form
- Can view all public content (blog, about us, etc.)

### Steering Members
- Have all general member permissions
- Can login to the admin dashboard (`/admin/login`)
- Can create, edit, and delete blog posts
- Can manage published content

### Setting Up a Steering Member

1. Access Django admin at `http://127.0.0.1:8000/admin/`
2. Create or edit a Member
3. Set the role to "Steering Member"
4. Set a username
5. Set password using Django shell:
```python
python manage.py shell
from apps.members.models import Member
member = Member.objects.get(username='your_username')
member.set_password('your_password')
member.save()
```

## 📚 API Documentation

Access the Swagger UI at: `http://127.0.0.1:8000/swagger/`

### Key Endpoints:
- `GET /api/members/members/` - List all members
- `POST /api/members/members/login/` - Steering member login
- `GET /api/blog/posts/` - List all blog posts
- `POST /api/blog/posts/` - Create post (steering members only)
- `PUT /api/blog/posts/{id}/` - Update post (steering members only)
- `DELETE /api/blog/posts/{id}/` - Delete post (steering members only)
- `GET /api/core/leaders/` - List leadership team
- `GET /api/core/events/` - List events

## 🎨 Design System

### Color Palette
- **Matrix Black**: `#0D1117` - Main background
- **Terminal Black**: `#1A2332` - Secondary background
- **Code Green**: `#00FF41` - Primary accent
- **Electric Lime**: `#C9F21D` - CTAs and highlights
- **Logo Colors**: Blue (`#4A90E2`), Red (`#E74C3C`), Teal (`#1ABC9C`)

### Typography
- **Headings**: Roboto Condensed
- **Monospace**: Roboto Mono (terminal aesthetic)

## 📁 Project Structure

```
airo-website/
├── backend/
│   ├── apps/
│   │   ├── members/    # Member management
│   │   ├── blog/       # Blog posts and categories
│   │   └── core/       # Leaders and events
│   ├── config/         # Django settings and URLs
│   └── manage.py
├── frontend/
│   ├── public/
│   │   └── assets/     # Logo and images
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/      # Reusable components
│   │   │   ├── home/        # Landing page sections
│   │   │   ├── about/       # About page sections
│   │   │   ├── blog/        # Blog components
│   │   │   └── membership/  # Membership form components
│   │   ├── pages/
│   │   │   ├── admin/       # Steering member dashboard
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Blog.jsx
│   │   │   └── BlogPost.jsx
│   │   ├── styles/          # Global CSS
│   │   ├── utils/           # API utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

## 🔒 Security Notes

- Passwords are hashed using Django's `make_password`
- CSRF protection enabled
- CORS configured for development
- Permission checks on all blog CRUD operations
- For production, implement proper JWT authentication

## 🚀 Deployment

### Backend (Django)
1. Set `DEBUG = False` in settings.py
2. Configure `ALLOWED_HOSTS`
3. Set up PostgreSQL or MySQL (recommended for production)
4. Collect static files: `python manage.py collectstatic`
5. Use Gunicorn/uWSGI with Nginx

### Frontend (React)
1. Build the production bundle: `npm run build`
2. Deploy the `dist/` folder to your hosting service (Vercel, Netlify, etc.)
3. Update API base URL in `frontend/src/utils/api.js`

## 📝 License

This project is created for the Islington AIRO Club.

## 👨‍💻 Contributors

- Developed for Islington AIRO Club
- Mentors: Shishir Subedi, Alish KC

## 📧 Contact

For questions or support, contact the club at the Islington campus.
