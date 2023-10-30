import type {
  GetRoadmapStepsResponse,
  GetRoadmapsMyResponse,
  GetRoadmapStepReferenceResponse,
  PostRoadmapsResponse,
  GetRoadmapGroupMemberResponse,
  Role,
  GetRoadmapGroupApplyResponse,
  PostRoadmapsGroupsParticipateResponse,
} from '@/api/roadmap/type';

export const getRoadmapsResponse: GetRoadmapsMyResponse = {
  success: true,
  message: 'ok',
  result: {
    categories: [
      {
        id: 1,
        name: '홍박사의 알고리즘즘즘즘즘즘즘즘즘즘즘',
      },
      {
        id: 2,
        name: '홍박사의 스프링',
      },
      {
        id: 3,
        name: '홍박사의 비밀일기 ><',
      },
    ],
    roadmaps: {
      tily: [
        {
          id: 1,
          name: '알고리즘 격파파파파파파파파파파파파파파',
          stepNum: 88,
        },
        {
          id: 2,
          name: '자료구조',
          stepNum: 50,
        },
      ],
      group: [
        {
          id: 3,
          name: '준서좌의 나도 할 수 있다 알고리즘즘즘즘즘즘즘',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 5,
            name: '김수현',
            image: 'asdf.jpg',
          },
        },
        {
          id: 4,
          name: '상명좌의 나도 할 수 있다 스프링',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 6,
            name: '김동영',
            image: 'asdf.jpg',
          },
        },
        {
          id: 5,
          name: '수현좌의 JPA 비밀 노트',
          stepNum: 20,
          image: 'qwer.jpg',
          creator: {
            id: 6,
            name: '김동영',
            image: 'asdf.jpg',
          },
        },
      ],
    },
  },
};

export const getRoadmapStepsResponse: GetRoadmapStepsResponse = {
  success: true,
  message: 'ok',
  result: {
    steps: [
      {
        id: 1,
        title: 'Next.js 란 무엇인가?',
        isCompleted: true,
        tilId: 1,
      },
      {
        id: 2,
        title: '설치와 실행',
        isCompleted: false,
        tilId: null,
      },
      {
        id: 3,
        title: '샘플앱 세탁',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 4,
        title: '배포',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 5,
        title: '뼈대 만들기',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 6,
        title: '라우팅',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 7,
        title: 'Single Page Application',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 8,
        title: '정적 자원 사용하기',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 9,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 10,
        title: 'css',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 11,
        title: 'backend',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 12,
        title: '글 목록 가져오기',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 13,
        title: '글 생성',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 14,
        title: 'cache',
        isCompleted: false,
        tilId: 1,
      },
    ],
    progress: 55,
    role: 'member',
  },
};

export const getRoadmapStepReferenceResponse: GetRoadmapStepReferenceResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 1,
    description: '7조 화이팅',
    youtube: [
      {
        id: 1,
        link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9KOaR6QMb9A?si=HA3x3k-PLh9dmO03" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      },
    ],
    web: [
      {
        id: 1,
        link: 'https://nextjs.org/docs/getting-started/installation',
      },
      {
        id: 2,
        link: 'https://nextjs.org/docs/getting-started/project-structure',
      },
      {
        id: 3,
        link: 'https://nextjs.org/docs/getting-started/project-structure',
      },
      {
        id: 4,
        link: 'https://nextjs.org/docs/getting-started/project-structure',
      },
    ],
  },
};

// eslint-disable-next-line prefer-const
export let getRoadmapGroupMemberResponse: GetRoadmapGroupMemberResponse = {
  success: true,
  message: 'ok',
  result: {
    users: [
      {
        id: 1,
        name: '김수현',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'member',
      },
      {
        id: 2,
        name: '이한홍',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'manager',
      },
      {
        id: 3,
        name: '김동영',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'manager',
      },
      {
        id: 4,
        name: '조준서',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'manager',
      },
      {
        id: 5,
        name: '이상명',
        image: 'https://avatars.githubusercontent.com/u/70303795?s=64&v=4',
        role: 'master',
      },
    ],
    myRole: 'master',
  },
};

export const getRoadmapGroupApplyResponse: GetRoadmapGroupApplyResponse = {
  success: true,
  message: 'ok',
  result: {
    users: [
      {
        id: 1,
        name: '조준서',
        image: 'https://avatars.githubusercontent.com/u/62373865?v=4',
        date: '2023-08-20',
        content:
          '저는 부산대학교 컴퓨터공학과 4학년 재학중입니다. 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.',
      },
      {
        id: 2,
        name: '김동영',
        image: 'https://avatars.githubusercontent.com/u/62373865?v=4',
        date: '2023-08-20',
        content:
          '저는 부산대학교 컴퓨터공학과 4학년 재학중입니다. 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.',
      },
      {
        id: 3,
        name: '홍박사',
        image: 'https://avatars.githubusercontent.com/u/62373865?v=4',
        date: '2023-08-20',
        content:
          '저는 부산대학교 컴퓨터공학과 4학년 재학중입니다. 현재 프론트엔드 개발자를 지망하고 있으며, 리액트 공부를 하고 싶습니다.',
      },
    ],
    myRole: 'master',
  },
};

export const updateFixture = (name: string) => {
  const length = getRoadmapsResponse.result.categories.length;

  getRoadmapsResponse.result.categories = [
    ...getRoadmapsResponse.result.categories,
    {
      id: length + 1,
      name,
    },
  ];
};

export const updateGetRoadmapStepsResponseFixture = (name: string) => {
  const length = getRoadmapStepsResponse.result.steps.length;

  getRoadmapStepsResponse.result.steps = [
    ...getRoadmapStepsResponse.result.steps,
    {
      id: length + 1,
      title: name,
      isCompleted: false,
      tilId: null,
    },
  ];
};

export const postRoadmapsResponse: PostRoadmapsResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 1,
  },
};

export const updateGetRoadmapGroupMemberResponseFixture = (userId: number, role: Exclude<Role, null>) => {
  getRoadmapGroupMemberResponse.result.users = getRoadmapGroupMemberResponse.result.users.map((user) =>
    user.id === userId ? { ...user, role } : user,
  );
};

export const postRoadmapsGroupsParticipateResponse: PostRoadmapsGroupsParticipateResponse = {
  success: true,
  message: 'ok',
  result: {
    id: 5,
  },
};
