import { FormField, FormStep } from './index.ts';

export interface FormControlsConfig {
  showClose: boolean;
  showBack: boolean;
  showNext: boolean;
  closeButtonText?: string;
  backButtonText?: string;
  nextButtonText?: string;
  submitButtonText?: string;
}

export interface StepperConfig {
  type: 'linear' | 'non-linear';
  showStepNumbers: boolean;
  showStepNames: boolean;
  allowSkip?: boolean;
}

export interface ServiceConfig {
  serviceId: string;
  serviceName: string;
  totalSteps: number;
  steps: FormStep[];
  submitEndpoint: string;
  formControlsConfig?: FormControlsConfig;
  stepperConfig?: StepperConfig;
}