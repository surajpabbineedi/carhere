'use client';

import React, { useEffect, useState } from 'react';
import { FormProvider } from '../src/context/FormProvider';
import { DynamicFormRenderer } from '../src/dynamic-rendering/DynamicFormRenderer';
import { ServiceConfig } from '../src/types/dynamic-rendering';

interface ServicePageProps {
  params: { serviceId: string };
}

export default function ServicePage({ params }: ServicePageProps) {
  const [serviceConfig, setServiceConfig] = useState<ServiceConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceConfig = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/services/${params.serviceId}/config`
        );
        const data = await response.json();
        setServiceConfig(data.data);
      } catch (error) {
        console.error('Error fetching service config:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceConfig();
  }, [params.serviceId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!serviceConfig) return <div className="error">Service not found</div>;

  return (
    <FormProvider serviceConfig={serviceConfig}>
      <DynamicFormRenderer />
    </FormProvider>
  );
}