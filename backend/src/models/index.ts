import { Service, Provider } from './types.js';
import { mockServices, mockProviders } from './mockData.js';

export const getServices = (): Service[] => {
  return mockServices;
};

export const getServiceById = (id: string): Service | undefined => {
  return mockServices.find((service) => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return mockServices.filter((service) => service.category === category);
};

export const getProviders = (): Provider[] => {
  return mockProviders;
};

export const getProviderById = (id: string): Provider | undefined => {
  return mockProviders.find((provider) => provider.id === id);
};

export const getProviderServices = (providerId: string): Service[] => {
  const provider = getProviderById(providerId);
  if (!provider) return [];
  return mockServices.filter((service) => provider.services.includes(service.id));
};
