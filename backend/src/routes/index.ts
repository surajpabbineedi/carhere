import express from 'express';
import {
  getAllServices,
  getService,
  getAllProviders,
  getProvider,
  getProviderServicesController,
} from '../controllers/index.js';

const router = express.Router();

// Services routes
router.get('/services', getAllServices);
router.get('/services/:id', getService);

// Providers routes
router.get('/providers', getAllProviders);
router.get('/providers/:id', getProvider);
router.get('/providers/:id/services', getProviderServicesController);

export default router;
