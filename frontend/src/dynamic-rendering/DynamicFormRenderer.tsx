'use client';

import React from 'react';
import { useFormContext } from '../context/FormProvider';

export const DynamicFormRenderer: React.FC = () => {
  const { currentStep, serviceConfig, formData, setFormData, nextStep, prevStep } = useFormContext();
  
  const step = serviceConfig.steps[currentStep];
  const formControlsConfig = serviceConfig.formControlsConfig || getDefaultFormControlsConfig();
  const stepperConfig = serviceConfig.stepperConfig || getDefaultStepperConfig();
  const isLastStep = currentStep === serviceConfig.totalSteps - 1;

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleClose = () => {
    window.history.back();
  };

  const handleNext = () => {
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="dynamic-form-container">
      {stepperConfig && (
        <div className="stepper-section">
          <div className="stepper-placeholder">
            {serviceConfig.steps.map((s: any, index: any) => (
              <div key={s.stepId} className={`stepper-item ${index === currentStep ? 'active' : ''}`}>
                {stepperConfig.showStepNumbers && <span className="step-number">{index + 1}</span>}
                {stepperConfig.showStepNames && <span className="step-name">{s.stepName}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="form-section">
        <div className="step-header">
          <h2>{step.title}</h2>
          {step.description && <p>{step.description}</p>}
        </div>

        <form className="form-fields">
          {step.fields.map((field: any) => (
            <div key={field.id} className="form-field-wrapper">
              <div className="field-placeholder">
                <label>{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  required={field.required}
                />
              </div>
            </div>
          ))}
        </form>
      </div>

      {formControlsConfig && (
        <div className="form-controls">
          {formControlsConfig.showClose && (
            <button
              type="button"
              className="btn btn-close"
              onClick={handleClose}
              title={formControlsConfig.closeButtonText || 'Close'}
            >
              ✕
            </button>
          )}

          <div className="controls-actions">
            {formControlsConfig.showBack && (
              <button
                type="button"
                className="btn btn-back"
                onClick={handlePrev}
                disabled={currentStep === 0}
              >
                {formControlsConfig.backButtonText || '← Back'}
              </button>
            )}

            {formControlsConfig.showNext && !isLastStep && (
              <button
                type="button"
                className="btn btn-next"
                onClick={handleNext}
              >
                {formControlsConfig.nextButtonText || 'Next →'}
              </button>
            )}

            {isLastStep && (
              <button
                type="submit"
                className="btn btn-submit"
                onClick={handleSubmit}
              >
                {formControlsConfig.submitButtonText || 'Submit'}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

function getDefaultFormControlsConfig() {
  return {
    showClose: true,
    showBack: true,
    showNext: true,
    closeButtonText: 'Close',
    backButtonText: '← Back',
    nextButtonText: 'Next →',
    submitButtonText: 'Submit',
  };
}

function getDefaultStepperConfig() {
  return {
    type: 'linear',
    showStepNumbers: true,
    showStepNames: true,
    allowSkip: false,
  };
}