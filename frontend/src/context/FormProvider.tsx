'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormContextType, ServiceConfig } from '../types/dynamic-rendering';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ 
  children: ReactNode;
  serviceConfig: ServiceConfig;
}> = ({ children, serviceConfig }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});

  const nextStep = () => {
    if (currentStep < serviceConfig.totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step >= 0 && step < serviceConfig.totalSteps) {
      setCurrentStep(step);
    }
  };

  const value: FormContextType = {
    currentStep,
    totalSteps: serviceConfig.totalSteps,
    formData,
    serviceConfig,
    setFormData,
    nextStep,
    prevStep,
    goToStep,
  };

  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};