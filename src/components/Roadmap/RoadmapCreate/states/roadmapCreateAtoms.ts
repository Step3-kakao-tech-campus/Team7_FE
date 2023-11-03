import { atom } from 'recoil';
import { type Creator } from '@/api/type';

export interface RoadmapForm {
  roadmap: RoadmapInfo;
  steps: Step[];
}

interface Roadmap extends RoadmapInfo {
  steps: Step[];
}

interface RoadmapInfo {
  name: string;
  description: string;
  code?: string;
  recentTilId?: number | null;
  isPublic?: boolean;
  isRecruit?: boolean;
  role?: 'master' | 'manager' | 'member' | null;
  creator?: Creator;
}

export interface Step {
  id?: number;
  title: string;
  description: string;
  dueDate?: Date | null;
  references: Reference;
}

export interface Reference {
  youtube: ReferenceLink[];
  web: ReferenceLink[];
}

export interface ReferenceLink {
  id?: number;
  link: string;
}

export const roadmapAtoms = atom<Roadmap>({
  key: 'roadmap',
  default: {
    name: '',
    description: '',
    isPublic: true,
    steps: [],
  },
});
