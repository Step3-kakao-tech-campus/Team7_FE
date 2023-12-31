const TILY_LINKS = {
  intro: () => '/intro',
  home: () => '/',
  verify: () => '/auth/register/verify',
  register: () => '/auth/register/',
  login: () => '/auth/login',
  kakaoLogin: () =>
    `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
  passwordVerify: () => '/auth/change-password/verify',
  changePassword: () => '/auth/change-password/',
  roadmap: () => '/roadmap?category=tily',
  roadmapDetail: (roadmapId: number) => `/roadmap/${roadmapId}`,
  roadmapCreate: () => '/roadmap/create',
  mypage: () => '/mypage',
  tilWrite: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `/tilWrite/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  tilView: ({ roadmapId, stepId, tilId }: tilWriteParams) =>
    `/tilView/roadmap/${roadmapId}/step/${stepId}/til/${tilId}`,
  peopleTil: ({ roadmapId, stepId }: Omit<tilWriteParams, 'tilId'>) => `/roadmap/${roadmapId}/step/${stepId}`,
  manageInfo: (roadmapId: number) => `/roadmap/${roadmapId}/manage/info`,
  manageStep: (roadmapId: number) => `/roadmap/${roadmapId}/manage/step`,
  manageMember: (roadmapId: number) => `/roadmap/${roadmapId}/manage/member`,
  manageTIL: (roadmapId: number) => `/roadmap/${roadmapId}/manage/til`,
  manageApply: (roadmapId: number) => `/roadmap/${roadmapId}/manage/apply`,
};

export default TILY_LINKS;

interface tilWriteParams {
  roadmapId: number;
  stepId: number;
  tilId: number;
}
