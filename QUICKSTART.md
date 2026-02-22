# CarHere - Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm run install:all
```

This will install dependencies for both frontend and backend.

### 2. Set Up Environment Variables

**Frontend (.env.local)**
```bash
cd frontend
copy .env.example .env.local
```

**Backend (.env)**
```bash
cd backend
copy .env.example .env
```

### 3. Start the Development Servers

#### Terminal 1 - Start Backend
```bash
npm run backend:dev
```
Backend will run on: `http://localhost:5000`

#### Terminal 2 - Start Frontend
```bash
npm run frontend:dev
```
Frontend will run on: `http://localhost:3000`

## 📚 Available Commands

### Frontend Commands
```bash
cd frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Run linting
```

### Backend Commands
```bash
cd backend
npm run dev      # Start development server with nodemon
npm run build    # Build TypeScript to JavaScript
npm start        # Run production build
npm run lint     # Run linting
```

### Root Commands
```bash
npm run frontend:dev  # Start frontend development server
npm run backend:dev   # Start backend development server
npm run frontend:build # Build frontend for production
npm run backend:build  # Build backend for production
npm run build:all     # Build both frontend and backend
```

## 🧪 Testing API Endpoints

### Using cURL

```bash
# Get all services
curl http://localhost:5000/api/services

# Get specific service
curl http://localhost:5000/api/services/1

# Filter services by category
curl "http://localhost:5000/api/services?category=Maintenance"

# Get all providers
curl http://localhost:5000/api/providers

# Get specific provider
curl http://localhost:5000/api/providers/1

# Get provider's services
curl http://localhost:5000/api/providers/1/services

# Health check
curl http://localhost:5000/health
```

### Using Postman
Import the endpoints listed above into Postman for easier testing.

## 📂 Project Structure

```
carhere/
├── frontend/              # Next.js Frontend
│   ├── app/              # Next.js App Router
│   ├── src/
│   │   ├── components/   # React Components
│   │   ├── pages/        # Page Components
│   │   ├── styles/       # CSS Styles
│   │   └── utils/        # Utility Functions
│   └── package.json
│
├── backend/              # Express Backend API
│   ├── src/
│   │   ├── controllers/  # Route Handlers
│   │   ├── models/       # Data Models
│   │   ├── routes/       # API Routes
│   │   ├── middleware/   # Custom Middleware
│   │   └── index.ts      # Server Entry Point
│   └── package.json
│
└── README.md             # Full Documentation
```

## 🎨 Available Components

### Button
Used for call-to-action elements with variants (primary, secondary, danger).

### Card
Flexible card component for displaying content.

### Header
Page header component with title and subtitle.

### ServiceItem
Displays service information with price and rating.

## 🔗 Frontend Connects to Backend

The frontend automatically connects to the backend at `http://localhost:5000/api` as configured in `frontend/.env.local`.

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 (backend) or 3000 (frontend) is already in use:

**For Backend:**
```bash
cd backend
PORT=5001 npm run dev
```

**For Frontend:**
Create/update `frontend/.env.local`:
```env
PORT=3001
```

### Module Not Found Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📦 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript, CORS
- **Package Manager**: npm

## 🗺️ Next Steps

1. Complete the basic homepage (✅ Done)
2. Add dynamic rendering from API
3. Implement user authentication
4. Create booking management system
5. Add payment integration

## 📞 Need Help?

Refer to the main [README.md](./README.md) for detailed documentation.
