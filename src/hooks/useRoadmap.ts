import { produce } from 'immer';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { usePostRoadmaps, usePostRoadmapsById } from '@/api/hooks/roadmap';
import type { StepForm } from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import { roadmapAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import TILY_LINKS from '@/constants/links';

const handleValue = (value: string) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
};

export const useRoadmap = () => {
  const router = useRouter();

  const [roadmap, setRoadmap] = useRecoilState(roadmapAtoms);
  const resetRoadmap = useResetRecoilState(roadmapAtoms);

  const [stepValid, setStepValid] = useState<boolean>(true);
  const [infoValid, setInfoValid] = useState<boolean>(true);
  const [stepForm, setStepForm] = useState<StepForm>(defaultStepForm);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const { postRoadmaps, isLoading: createLoading } = usePostRoadmaps();
  const { postRoadmapsById, isLoading: editLoading } = usePostRoadmapsById();

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

  const handleDeleteReference = (type: 'youtube' | 'web', stepIdx: number, idx: number) => {
    if (type === 'youtube') {
      setRoadmap((prev) =>
        produce(prev, (draft) => {
          draft.steps[stepIdx].references.youtube.splice(idx, 1);
        }),
      );
    } else {
      setRoadmap((prev) =>
        produce(prev, (draft) => {
          draft.steps[stepIdx].references.web.splice(idx, 1);
        }),
      );
    }
  };

  const onCreateRoadmapHandler = async () => {
    if (roadmap.name === '') {
      setInfoValid(false);
    } else {
      setInfoValid(true);
      setIsSaved(true);
      const { steps, ...roadmapInfo } = roadmap;
      const data = await postRoadmaps({ roadmap: roadmapInfo, steps });

      if (data.success) {
        router.replace(TILY_LINKS.roadmapDetail(data.result.id));
        resetRoadmap();
      }
    }
  };

  const onEditRoadmapHandler = async () => {
    const roadmapId = router.query.roadmapId;
    if (roadmap.name === '') {
      setInfoValid(false);
    } else {
      setInfoValid(true);
      setIsSaved(true);
      const { steps, ...roadmapInfo } = roadmap;
      const body = { roadmap: roadmapInfo, steps };
      await postRoadmapsById({ roadmapId: Number(roadmapId), body });
    }
  };

  return {
    roadmap,
    handleInfoChange,
    stepForm,
    setStepForm,
    handleStepFormChange,
    handleCreateStep,
    handleEditStep,
    infoValid,
    stepValid,
    handleResetStep,
    handleDeleteReference,
    onCreateRoadmapHandler,
    onEditRoadmapHandler,
    createLoading,
    editLoading,
    isSaved,
    setIsSaved,
  };
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
