export const tilyLinks = {
  intro: () => '/intro',
  home: () => '/',
  verify: () => '/auth/register/verify',
  register: () => '/auth/register/',
  login: () => '/auth/login',
  passwordVerify: () => '/auth/change-password/verify',
  changePassword: () => '/auth/change-password/',
  roadmap: () => '/roadmap',
  roadmapCreate: () => '/roadmap/create',
  mypage: () => '/mypage',
  tilWrite: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `/TILWrite/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  tilView: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `/TILView/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  peopleTil: ({ roadmapId, stepId }: Omit<tilWriteParams, 'tilId'>) => `/roadmap/${roadmapId}/step/${stepId}`,
  manageGroupInfo: (roadmapId: number) => `/roadmap/${roadmapId}/manage/groupInfo`,
  manageMember: (roadmapId: number) => `/roadmap/${roadmapId}/manage/member`,
  manageTIL: (roadmapId: number) => `/roadmap/${roadmapId}/manage/TIL`,
  manageApply: (roadmapId: number) => `/roadmap/${roadmapId}/manage/apply`,
};

interface tilWriteParams {
  roadmapId: number;
  stepId: number;
  tilId: number;
}
