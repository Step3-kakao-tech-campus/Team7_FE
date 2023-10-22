import { atom, selector } from 'recoil';

export interface RoadmapForm {
  roadmap: RoadmapInfo;
  steps: Step[];
}

interface RoadmapInfo {
  name: string;
  description: string;
  isPublic: boolean;
}

export interface Step {
  title: string;
  description: string;
  dueDate: Date | null;
  references: Reference;
}

export interface Reference {
  youtube: ReferenceLink[];
  web: ReferenceLink[];
}

export interface ReferenceLink {
  link: string;
}

export const roadmapInfoAtoms = atom<RoadmapInfo>({
  key: 'roadmapInfo',
  default: {
    name: '',
    description: '',
    isPublic: true,
  },
});

export const roadmapStepAtoms = atom<Step[]>({
  key: 'roadmapStep',
  default: [],
});

export const roadmapFormDataSelector = selector({
  key: 'roadmapFormData',
  get: ({ get }) => {
    const roadmap = get(roadmapInfoAtoms);
    const steps = get(roadmapStepAtoms);

    return { roadmap, steps };
  },
});
