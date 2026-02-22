# Development Guide - CarHere

## 🎯 Adding New Features

### Adding a New Reusable Component

#### 1. Create the Component File

Create a new file in `frontend/src/components/shared/`:

```typescript
// frontend/src/components/shared/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
```

#### 2. Use the Component in a Page

```tsx
// frontend/app/page.tsx
import Modal from '@/src/components/shared/Modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        title="Welcome"
        onClose={() => setIsModalOpen(false)}
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}
```

### Adding a New API Endpoint

#### 1. Create Mock Data (if needed)

```typescript
// backend/src/models/mockData.ts
export const mockBookings = [
  {
    id: '1',
    serviceId: '1',
    providerId: '1',
    userId: 'user123',
    date: '2026-02-25',
    time: '10:00 AM',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  },
];
```

#### 2. Create Controller Function

```typescript
// backend/src/controllers/index.ts
export const getBookings = (req: Request, res: Response) => {
  try {
    const bookings = mockBookings;
    res.json({
      success: true,
      data: bookings,
      message: 'Bookings retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving bookings',
      error,
    });
  }
};
```

#### 3. Add Route

```typescript
// backend/src/routes/index.ts
router.get('/bookings', getBookings);
```

#### 4. Create API Client Function

```typescript
// frontend/src/utils/api.ts
export const fetchBookings = async () => {
  try {
    const response = await apiClient.get('/bookings');
    return response.data;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }
};
```

### Adding a New Page

#### 1. Create Page Component

```typescript
// frontend/app/services/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/src/components/shared/Header';
import ServiceItem from '@/src/components/shared/ServiceItem';
import { fetchServices } from '@/src/utils/api';

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetchServices();
        setServices(response.data);
      } catch (error) {
        console.error('Error loading services:', error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return (
    <>
      <Header title="Our Services" subtitle="Choose from our wide range of car services" />
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {loading ? (
            <p>Loading services...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service: any) => (
                <ServiceItem
                  key={service.id}
                  name={service.name}
                  price={`$${service.price}`}
                  rating={service.rating}
                  available={service.available}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
```

## 🔌 API Integration Workflow

### Fetching Data on Component Load

```tsx
'use client';

import { useEffect, useState } from 'react';
import { fetchProviders } from '@/src/utils/api';

interface Provider {
  id: string;
  name: string;
  rating: number;
}

export default function ProvidersList() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchProviders();
        setProviders(data.data);
      } catch (err) {
        setError('Failed to load providers');
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div>
      {providers.map(provider => (
        <div key={provider.id}>
          <h3>{provider.name}</h3>
          <p>Rating: {provider.rating}⭐</p>
        </div>
      ))}
    </div>
  );
}
```

## 📝 Adding Environment Variables

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_APP_NAME=CarHere
```

### Backend (.env)

```env
PORT=5000
NODE_ENV=development
LOG_LEVEL=info
CORS_ORIGIN=http://localhost:3000
```

### Using Environment Variables

**Frontend:**
```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

**Backend:**
```typescript
const port = process.env.PORT || 5000;
```

## 🧹 Code Organization Best Practices

### Component Structure

```
components/
├── shared/           # Reusable components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Modal.tsx
├── layout/           # Layout components
│   ├── Navbar.tsx
│   └── Sidebar.tsx
├── features/         # Feature-specific components
│   ├── ServiceCard.tsx
│   └── ProviderCard.tsx
└── hooks/            # Custom React hooks
    ├── useFetch.ts
    └── useAuth.ts
```

### API Utilities Organization

```
utils/
├── api.ts            # API client setup
├── hooks/            # API hooks
│   ├── useServices.ts
│   └── useProviders.ts
└── helpers/          # Helper functions
    ├── formatting.ts
    └── validation.ts
```

## 🔄 State Management (When Needed)

For simple state, use `useState`. For complex state, consider:
- React Context API
- Zustand
- Redux Toolkit
- Jotai

Example with Context:

```typescript
// context/ServicesContext.tsx
import React, { createContext, useState } from 'react';

export const ServicesContext = createContext({});

export const ServicesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [services, setServices] = useState([]);

  return (
    <ServicesContext.Provider value={{ services, setServices }}>
      {children}
    </ServicesContext.Provider>
  );
};
```

## 📝 TypeScript Best Practices

### Define Interfaces for API Responses

```typescript
// types/api.ts
export interface Service {
  id: string;
  name: string;
  price: number;
  rating: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}
```

### Use Interfaces in Components

```tsx
interface HomeProps {
  initialServices?: Service[];
}

const Home: React.FC<HomeProps> = ({ initialServices = [] }) => {
  // Component logic
};
```

## 🎨 Styling Guidelines

### Tailwind CSS Classes to Use

```tsx
// Consistent spacing
<div className="p-4 m-4">  // padding and margin

// Responsive design
<div className="block md:flex lg:grid">

// Colors
<button className="bg-blue-600 hover:bg-blue-700">

// Typography
<h1 className="text-3xl font-bold">
```

## 🧪 Testing Template

### Component Test (Jest + React Testing Library)

```typescript
// __tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '@/src/components/shared/Button';

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    screen.getByText('Click me').click();
    expect(handleClick).toHaveBeenCalled();
  });
});
```

## 📊 Database Integration (Future)

When adding database support:

```typescript
// backend/src/db/connection.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
```

## 🚀 Performance Tips

1. **Code Splitting**: Next.js automatically code-splits
2. **Image Optimization**: Use Next.js `Image` component
3. **API Caching**: Implement response caching
4. **Lazy Loading**: Use React.lazy() for components
5. **Debouncing**: Use debounce for search inputs

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Express.js Guide](https://expressjs.com/)

---

**Happy Coding! 🚀**
