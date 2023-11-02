import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapsById, usePostRoadmaps } from '@/api/hooks/roadmap';
import type { StepForm } from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import {
  roadmapFormDataSelector,
  roadmapInfoAtoms,
  roadmapStepAtoms,
} from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import TILY_LINKS from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

export const useRoadmapInfo = () => {
  const [roadmapValid, setRoadmapValid] = useState(true);
  const router = useRouter();

  const [info, setInfo] = useRecoilState(roadmapInfoAtoms);
  const roadmapFormData = useRecoilValue(roadmapFormDataSelector);
  const resetRoadmapInfo = useResetRecoilState(roadmapInfoAtoms);
  const resetRoadmapStep = useResetRecoilState(roadmapStepAtoms);

  const { postRoadmaps, isLoading } = usePostRoadmaps();

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInfo((prev) => ({ ...prev, [name]: handleValue(value) }));
  };

  const onCreateRoadmapHandler = async () => {
    if (info.name === '') {
      setRoadmapValid(false);
    } else {
      setRoadmapValid(true);
      const data = await postRoadmaps(roadmapFormData);

      if (data.success) {
        router.replace(TILY_LINKS.roadmap());
        resetRoadmapInfo();
        resetRoadmapStep();
      }
    }
  };

  const handleValue = (value: string) => {
    if (value === 'public') return true;
    if (value === 'private') return false;
    return value;
  };

  return { info, handleInfoChange, roadmapValid, onCreateRoadmapHandler, isLoading };
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

  const handleStepChange = (name: string, value: string | Date | null) => {
    setIsValid(true);
    setStep({ ...step, [name]: value });
  };

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
  const roadmapId = useQueryParam('roadmapId');

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
