# CarHere - All Car Services at One Place

A full-stack application that brings all car services to one convenient platform for car users.

## 🚀 Project Structure

```
carhere/
├── frontend/          # Next.js 14 frontend application
│   ├── app/          # Next.js App Router
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   └── shared/
│   │   ├── pages/        # Page components
│   │   ├── styles/       # Global styles
│   │   └── utils/        # Utility functions and API client
│   ├── public/       # Static assets
│   └── package.json
│
└── backend/          # Node.js/Express API
    ├── src/
    │   ├── controllers/   # Route controllers
    │   ├── models/       # Data models and mock data
    │   ├── routes/       # API routes
    │   ├── middleware/   # Express middleware
    │   └── index.ts      # Server entry point
    └── package.json
```

## 📋 Features

### Frontend
- **Modern UI**: Built with Next.js 14 and TypeScript
- **Reusable Components**: 
  - `Button` - Customizable button with variants
  - `Card` - Flexible card component
  - `Header` - Page header component
  - `ServiceItem` - Service display component
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **API Integration**: Axios client for backend communication

### Backend
- **RESTful API**: Express.js server
- **Services Endpoints**:
  - `GET /api/services` - Get all services
  - `GET /api/services/:id` - Get single service
  - `GET /api/services?category=<category>` - Filter by category
- **Providers Endpoints**:
  - `GET /api/providers` - Get all providers
  - `GET /api/providers/:id` - Get single provider
  - `GET /api/providers/:id/services` - Get provider services
- **Error Handling**: Centralized error middleware
- **CORS Support**: Enabled for frontend communication

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
# or
yarn install
```

### Backend Setup

```bash
cd backend
npm install
# or
yarn install
```

## 🚀 Running the Project

### Start Backend Server

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:5000`

### Start Frontend Development Server

In a new terminal:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📚 Available API Endpoints

### Services
- `GET http://localhost:5000/api/services` - List all services
- `GET http://localhost:5000/api/services/1` - Get service by ID
- `GET http://localhost:5000/api/services?category=Maintenance` - Filter services

### Providers
- `GET http://localhost:5000/api/providers` - List all providers
- `GET http://localhost:5000/api/providers/1` - Get provider by ID
- `GET http://localhost:5000/api/providers/1/services` - Get provider's services

### Health Check
- `GET http://localhost:5000/health` - Server health check

## 🎨 Components

### Button Component
```tsx
<Button 
  text="Click Me" 
  onClick={() => {}}
  variant="primary" // 'primary' | 'secondary' | 'danger'
  disabled={false}
/>
```

### Card Component
```tsx
<Card
  title="Service Title"
  description="Service description"
  icon="🚗"
/>
```

### ServiceItem Component
```tsx
<ServiceItem
  name="Oil Change"
  price="$49.99"
  rating={4.8}
  available={true}
/>
```

## 📝 Environment Configuration

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
```

## 📦 Production Build

### Frontend
```bash
cd frontend
npm run build
npm run start
```

### Backend
```bash
cd backend
npm run build
npm run start
```

## 🗺️ Future Enhancements

- [ ] Dynamic service rendering from API
- [ ] User authentication system
- [ ] Booking management system
- [ ] Payment integration
- [ ] Real-time notifications
- [ ] Provider dashboard
- [ ] Customer reviews and ratings
- [ ] Advanced search and filtering
- [ ] Location-based services

## 📄 Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- CORS middleware

## 📞 Support

For issues or questions, please create an issue in the repository.

## 📄 License

This project is open source and available under the MIT License.