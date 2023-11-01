import { produce } from 'immer';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapsById, usePostRoadmaps } from '@/api/hooks/roadmap';
import type { StepForm } from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import { roadmapAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import { tilyLinks } from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

const handleValue = (value: string) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
};

export const useRoadmap = () => {
  const [roadmap, setRoadmap] = useRecoilState(roadmapAtoms);
  const [stepValid, setStepValid] = useState<boolean>(true);
  const [stepForm, setStepForm] = useState<StepForm>(defaultStepForm);

  // const roadmapFormData = useRecoilValue(roadmapFormDataSelector);
  // const resetRoadmapInfo = useResetRecoilState(roadmapInfoAtoms);
  // const resetRoadmapStep = useResetRecoilState(roadmapStepAtoms);

  const { postRoadmaps, isLoading } = usePostRoadmaps();

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setRoadmap((prev) => ({ ...prev, [name]: handleValue(value) }));
  };

  const handleStepFormChange = (name: string, value: string | Date | null) => {
    setStepValid(true);
    setStepForm({ ...stepForm, [name]: value });
  };

  const handleCreateStep = (callback: () => void) => {
    if (!stepForm.title) {
      setStepValid(false);
    } else {
      setStepValid(true);
      setRoadmap((prev) =>
        produce(prev, (draft) => {
          draft.steps.push(stepForm);
        }),
      );
      handleResetStep();
      callback();
    }
  };

  const handleEditStep = (callback: () => void, idx: number) => {
    if (!stepForm.title) {
      setStepValid(false);
    } else {
      setStepValid(true);
      setRoadmap((prev) =>
        produce(prev, (draft) => {
          draft.steps[idx] = stepForm;
        }),
      );
      handleResetStep();
      callback();
    }
  };

  const handleResetStep = () => {
    setStepForm(defaultStepForm);
    setStepValid(true);
  };

  // const onCreateRoadmapHandler = async () => {
  //   if (info.name === '') {
  //     setRoadmapValid(false);
  //   } else {
  //     setRoadmapValid(true);
  //     const data = await postRoadmaps(roadmapFormData);

  //     if (data.success) {
  //       router.replace(tilyLinks.roadmap());
  //       resetRoadmapInfo();
  //       resetRoadmapStep();
  //     }
  //   }
  // };

  return {
    roadmap,
    handleInfoChange,
    stepForm,
    setStepForm,
    handleStepFormChange,
    handleCreateStep,
    handleEditStep,
    stepValid,
    handleResetStep,
  };
};

/**
 * Step 생성 시 사용되는 커스텀 훅
 * @param defaultValue
 * @returns
 */
export const useStepInfo = (defaultValue: StepForm) => {
  const [stepList, setStepList] = useRecoilState(roadmapStepAtoms);
  const [step, setStep] = useState<StepForm>(defaultValue);
  const [isValid, setIsValid] = useState(true);

  /**
   * Step을 생성한다.
   * @param callback 모달의 onClose를 받기 위한 콜백 함수
   */
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

  const handleEditStep = (callback: () => void, idx: number) => {
    if (!step.title) {
      setIsValid(false);
    } else {
      setIsValid(true);
      const newStepList = [...stepList];
      newStepList[idx] = step;
      setStepList(newStepList);
      handleResetStep();
      callback();
    }
  };

  const handleResetStep = () => {
    setStep(defaultValue);
    setIsValid(true);
  };

  return { step, setStep, isValid, handleResetStep, handleStepChange, handleCreateStep, handleEditStep };
};

/**
 * 참고자료 생성 시 사용되는 커스텀 훅
 * @param type
 * @param stepIdx
 * @returns
 */
export const useReference = (type: string, stepIdx: number, where: 'detail' | 'create') => {
  const router = useRouter();
  const roadmapId = useQueryParam(router.query.roadmapId);

  const [stepList, setStepList] = useRecoilState(roadmapStepAtoms);
  const data = useGetRoadmapsById(Number(roadmapId));

  // 타입에 따라서 step의 참고자료 목록에서 가져옴
  let references;
  if (where === 'detail') {
    if (type === 'youtube') {
      references = data?.result.steps[stepIdx].references.youtube;
    } else {
      references = data?.result.steps[stepIdx].references.web;
    }
  } else if (where === 'create') {
    if (type === 'youtube') {
      references = stepList[stepIdx].references.youtube;
    } else {
      references = stepList[stepIdx].references.web;
    }
  }

  // 참고자료 한가지를 삭제하는 함수
  const handleDeleteReference = (idx: number) => {
    const newStepList = [...stepList];
    const newReferences = { ...stepList[stepIdx].references };

    if (type === 'youtube') {
      const newYoutube = [...stepList[stepIdx].references.youtube];
      newYoutube.splice(idx, 1);
      newReferences.youtube = newYoutube;
    } else {
      const newWeb = [...stepList[stepIdx].references.web];
      newWeb.splice(idx, 1);
      newReferences.web = newWeb;
    }

    newStepList[stepIdx] = { ...newStepList[stepIdx], references: newReferences };

    setStepList(newStepList);
  };

  return { references, handleDeleteReference };
};

const defaultStepForm = {
  title: '',
  description: '',
  dueDate: new Date(),
  references: {
    youtube: [],
    web: [],
  },
};
