export const tilyLinks = {
  intro: () => '/intro',
  home: () => '/',
  verify: () => '/auth/register/verify',
  register: () => '/auth/register/',
  login: () => '/auth/login',
  findPwVerify: () => '/auth/change-password/verify',
  changePassword: () => '/auth/change-password/',
  roadmap: () => '/roadmap',
  mypage: () => '/mypage',
  tilWrite: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `TILWrite/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  peopleTil: ({ roadmapId, stepId }: Omit<tilWriteParams, 'tilId'>) => `/roadmap/${roadmapId}/step/${stepId}`,
};

interface tilWriteParams {
  roadmapId: number;
  stepId: number;
  tilId: number;
}
