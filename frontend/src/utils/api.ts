import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchServices = async () => {
  try {
    const response = await apiClient.get('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};

export const fetchServiceById = async (id: string) => {
  try {
    const response = await apiClient.get(`/services/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching service ${id}:`, error);
    throw error;
  }
};

export const fetchProviders = async () => {
  try {
    const response = await apiClient.get('/providers');
    return response.data;
  } catch (error) {
    console.error('Error fetching providers:', error);
    throw error;
  }
};

export default apiClient;
