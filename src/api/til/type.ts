export type TilsRequest = string;

export interface TilsResponse {
  success: boolean;
  message: string;
  result: {
    tils: Til[];
  } | null;
  hasNext: boolean;
}

export interface Til {
  id: number;
  createDate: string;
  step: {
    id: number;
    title: string;
  };
  roadmap: {
    id: number;
    name: string;
  };
}

export interface PostTilsIndividualResponse {
  success: boolean;
  message: string;
  result: {
    id: number;
  };
}
