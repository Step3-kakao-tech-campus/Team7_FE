import { useEffect, useState } from 'react';
import type { RoadmapInfo, Step } from '@/pages/roadmap/create';

export type RoadmapValid = 'roadmap' | 'step' | null;

export const useRoeadmapCreate = (defaultInfo: RoadmapInfo, defaultStep: Step) => {
  const [info, setInfo] = useState<RoadmapInfo>(defaultInfo);
  const [stepList, setStepList] = useState<Step[]>([]);
  const [step, setStep] = useState<Step>(defaultStep);
  const [valid, setValid] = useState<RoadmapValid>(null);

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInfo((prev) => ({ ...prev, [name]: value === 'public' ? true : value === 'private' ? false : value }));
  };

  const handleStep = (name: string, value: string | Date | null) => {
    setStep((prev) => ({ ...prev, [name]: value }));
    setValid(null);
  };

  /**
   * Step 정보를 입력하다 모달을 닫았을 때, Input의 값들을 초기화 해줍니다.
   */
  const resetStep = () => {
    setStep(defaultStep);
  };

  const addStep = () => {
    if (!step.title) {
      setValid('step');
      return false;
    } else {
      setStepList((prev) => [...prev, step]);
      resetStep();
      return true;
    }
  };

  return { info, step, stepList, valid, handleInfo, handleStep, resetStep, addStep };
};
