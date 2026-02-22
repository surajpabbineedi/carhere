// c:\Users\thele\OneDrive\Desktop\carhere\frontend\src\types\dynamic-rendering.ts
export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'number' | 'dropdown' | 'file' | 'textarea' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  required: boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    message?: string;
  };
  options?: Array<{ label: string; value: string }>;
  accept?: string;
}

export interface FormStep {
  stepId: string;
  stepName: string;
  stepNumber: number;
  title: string;
  description?: string;
  fields: FormField[];
  componentPath?: string;
}

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

export interface FormContextType {
  currentStep: number;
  totalSteps: number;
  formData: Record<string, any>;
  serviceConfig: ServiceConfig;
  setFormData: (data: Record<string, any>) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
}