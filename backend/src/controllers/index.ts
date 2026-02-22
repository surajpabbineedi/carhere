import { Request, Response } from 'express';
import {
  getServices,
  getServiceById,
  getServicesByCategory,
  getProviders,
  getProviderById,
  getProviderServices,
} from '../models/index.js';

// Services Controllers
export const getAllServices = (req: Request, res: Response) => {
  try {
    const category = req.query.category as string;
    const services = category
      ? getServicesByCategory(category)
      : getServices();
    res.json({
      success: true,
      data: services,
      message: 'Services retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving services',
      error,
    });
  }
};

export const getService = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const service = getServiceById(id);
    if (!service) {
      res.status(404).json({
        success: false,
        message: 'Service not found',
      });
      return;
    }
    res.json({
      success: true,
      data: service,
      message: 'Service retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving service',
      error,
    });
  }
};

// Providers Controllers
export const getAllProviders = (req: Request, res: Response) => {
  try {
    const providers = getProviders();
    res.json({
      success: true,
      data: providers,
      message: 'Providers retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving providers',
      error,
    });
  }
};

export const getProvider = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const provider = getProviderById(id);
    if (!provider) {
      res.status(404).json({
        success: false,
        message: 'Provider not found',
      });
      return;
    }
    res.json({
      success: true,
      data: provider,
      message: 'Provider retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving provider',
      error,
    });
  }
};

export const getProviderServicesController = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const services = getProviderServices(id);
    if (services.length === 0) {
      res.status(404).json({
        success: false,
        message: 'No services found for this provider',
      });
      return;
    }
    res.json({
      success: true,
      data: services,
      message: 'Provider services retrieved successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error retrieving provider services',
      error,
    });
  }
};
