import { useRecoilState } from 'recoil';
import { useState } from 'react';
import type { StepForm } from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import { roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

export const useStepInfo = (defaultValue: StepForm) => {
  const [step, setStep] = useState<StepForm>(defaultValue);
  const [isValid, setIsValid] = useState(true);

  const [stepList, setStepList] = useRecoilState(roadmapStepAtoms);

  const handleStepChange = (name: string, value: string | Date | null) => {
    setIsValid(true);
    setStep({ ...step, [name]: value });
  };

  const handleCreateStep = (callback: () => void) => {
    if (!step.title) {
      setIsValid(false);
    } else {
      setIsValid(true);
      setStepList([...stepList, step]);
      handleResetStep();
      callback();
    }
  };
  const handleResetStep = () => {
    setStep(defaultValue);
    setIsValid(true);
  };

  return { step, setStep, isValid, handleResetStep, handleStepChange, handleCreateStep };
};
