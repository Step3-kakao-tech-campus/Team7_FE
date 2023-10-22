import type {
  GetRoadmapStepsResponse,
  GetRoadmapsResponse,
  GetRoadmapStepReferenceResponse,
  PostRoadmapsResponse,
} from '@/api/roadmap/type';

export const getRoadmapsResponse: GetRoadmapsResponse = {
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
        title: '자바 소개',
        isCompleted: true,
        tilId: 1,
      },
      {
        id: 2,
        title: '객체 지향',
        isCompleted: false,
        tilId: null,
      },
      {
        id: 3,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 4,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 5,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 6,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 7,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 8,
        title: '클래스 기초',
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
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 11,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 12,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 13,
        title: '클래스 기초',
        isCompleted: false,
        tilId: 1,
      },
      {
        id: 14,
        title: '클래스 기초',
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
        link: `<iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/kWUsI7LCSmY?si=59XO3fvZ_pwxMDs3"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />`,
      },
      {
        id: 2,
        link: `<iframe width="560" height="315" src="https://www.youtube.com/embed/pWvF8AOO_Ao?si=fOJR_fRZ3mI3p7fV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
      },
    ],
    web: [
      {
        id: 1,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
      },
      {
        id: 2,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter',
      },
    ],
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
