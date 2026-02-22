import express, { Request, Response } from 'express';
import { ServiceConfig } from '../types/service.js';

const router = express.Router();

const serviceConfigs: Record<string, ServiceConfig> = {
  'car-insurance': {
    serviceId: 'car-insurance',
    serviceName: 'Car Insurance',
    totalSteps: 3,
    steps: [
      {
        stepId: 'personal-info',
        stepName: 'Personal Information',
        stepNumber: 1,
        title: 'Tell us about yourself',
        description: 'Please provide your personal details',
        fields: [
          {
            id: 'firstName',
            name: 'firstName',
            type: 'text',
            label: 'First Name',
            placeholder: 'John',
            required: true,
          },
          {
            id: 'lastName',
            name: 'lastName',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Doe',
            required: true,
          },
          {
            id: 'email',
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'john@example.com',
            required: true,
          },
        ],
      },
      {
        stepId: 'vehicle-info',
        stepName: 'Vehicle Information',
        stepNumber: 2,
        title: 'Tell us about your vehicle',
        description: 'Please provide your vehicle details',
        fields: [
          {
            id: 'vehicleType',
            name: 'vehicleType',
            type: 'dropdown',
            label: 'Vehicle Type',
            required: true,
            options: [
              { label: 'Car', value: 'car' },
              { label: 'Truck', value: 'truck' },
              { label: 'SUV', value: 'suv' },
            ],
          },
          {
            id: 'registrationDoc',
            name: 'registrationDoc',
            type: 'file',
            label: 'Registration Document',
            required: true,
            accept: '.pdf,.jpg,.png',
          },
        ],
      },
      {
        stepId: 'coverage',
        stepName: 'Coverage',
        stepNumber: 3,
        title: 'Choose your coverage',
        description: 'Select the coverage options',
        fields: [
          {
            id: 'coverageType',
            name: 'coverageType',
            type: 'dropdown',
            label: 'Coverage Type',
            required: true,
            options: [
              { label: 'Basic', value: 'basic' },
              { label: 'Standard', value: 'standard' },
              { label: 'Premium', value: 'premium' },
            ],
          },
          {
            id: 'additionalNotes',
            name: 'additionalNotes',
            type: 'textarea',
            label: 'Additional Notes',
            placeholder: 'Any additional information...',
            required: false,
          },
        ],
      },
    ],
    submitEndpoint: '/api/services/car-insurance/submit',
    formControlsConfig: {
      showClose: true,
      showBack: true,
      showNext: true,
      closeButtonText: 'Close',
      backButtonText: 'Back',
      nextButtonText: 'Next',
      submitButtonText: 'Submit',
    },
    stepperConfig: {
      type: 'linear',
      showStepNumbers: true,
      showStepNames: true,
      allowSkip: false,
    },
  },
};

router.get('/:serviceId/config', (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const config = serviceConfigs[serviceId];

  if (!config) {
    return res.status(404).json({
      success: false,
      message: 'Service not found',
    });
  }

  res.json({
    success: true,
    data: config,
  });
});

router.post('/:serviceId/submit', (req: Request, res: Response) => {
  const { serviceId } = req.params;
  const formData = req.body;

  console.log(`Submitting ${serviceId} with data:`, formData);

  res.json({
    success: true,
    message: 'Form submitted successfully',
    data: { submissionId: Date.now() },
  });
});

export default router;