export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  available: boolean;
  duration: string;
}

export interface Provider {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  rating: number;
  services: string[];
}

export interface Booking {
  id: string;
  serviceId: string;
  providerId: string;
  userId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}
