import { atom } from 'recoil';

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

interface Reference {
  youtube: ReferenceLink[];
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
