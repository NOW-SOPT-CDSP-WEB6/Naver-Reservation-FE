import { ReactElement, ReactNode, useState } from 'react';

import { FunnelType } from '@/type';

type StepType = {
  name?: string;
  children: ReactNode;
};

type FunnelStepType = {
  childStep: ReactElement<StepType>[];
};

export const useFunnel = () => {
  const [step, setStep] = useState<FunnelType>('키워드');

  const Step = ({ children }: StepType) => {
    return <>{children}</>;
  };

  const Funnel = ({ childStep }: FunnelStepType) => {
    const targetStep = childStep.find((child) => child.props.name === step);

    if (targetStep === undefined) throw new Error('Funnel Step is invalid');

    return Object.assign(targetStep, { Step });
  };

  return [Funnel, setStep];
};
