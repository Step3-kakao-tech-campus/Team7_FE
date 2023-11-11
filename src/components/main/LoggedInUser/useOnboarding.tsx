import { useEffect, useRef, useState } from 'react';
import { ACTIONS, type CallBackProps, EVENTS, STATUS } from 'react-joyride';

export const useOnbaording = () => {
  const [run, setRun] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [steps, setSteps] = useState<any>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isCategoryNextStep, setIsCategoryNextStep] = useState<boolean>(false);

  const historyRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLFormElement>(null);
  const TILButtonRef = useRef<HTMLDivElement>(null);

  const [isOnboarding, setIsOnboarding] = useState(false);
  useEffect(() => {
    const mainOnboarding = localStorage.getItem('mainOnboarding');

    if (mainOnboarding === null) {
      setIsOnboarding(true);
    }
  }, []);

  useEffect(() => {
    setRun(true);
    setSteps([
      {
        content: (
          <div>
            TILy 에 오신 것을 환영합니다!
            <br />
            TILy 를 사용하는 방법을 간단히 알려드릴게요.
          </div>
        ),
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 20,

        placement: 'center',
        disableScrolling: true, // 스크롤 방지
        spotlightClicks: true, // 스포트 라이트된 영역 클릭
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: 'body',
        title: '안녕하세요.',
      },
      {
        content: <div>상단 버튼을 통해 TIL을 생성할 수 있어요!</div>,
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 0,
        hideBackButton: true,
        placement: 'bottom',
        spotlightClicks: false, // 스포트 라이트된 영역 클릭
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: TILButtonRef.current!,
        title: 'TIL 작성하기',
      },
      {
        content: <div>학습 종류와 공부할 TIL을 선택할 수 있습니다.</div>,
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 14,
        placement: 'right',
        disableScrolling: true, // 스크롤 방지
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: '[data-testid="TILSelect"]:nth-of-type(1)',
        title: 'TIL 선택하기',
      },
      {
        content: <div>개인 TIL 또는 로드맵 TIL 학습을 선택할 수 있습니다.</div>,
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 12,
        placement: 'right',
        disableScrolling: true, // 스크롤 방지
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: '[data-testid="tab"]:nth-of-type(1)',
        title: 'TIL 학습 종류 선택',
      },
      {
        content: (
          <div>
            카테고리를 생성하여 학습을 분류할 수 있어요!
            <br />
            ex 알고리즘, 네트워크
          </div>
        ),
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 12,
        placement: 'right',
        disableScrolling: true, // 스크롤 방지
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: '[data-testid="plusButton1"]:nth-of-type(1)',
        title: '카테고리 생성',
      },
      {
        content: <div>학습할 카테고리를 선택할 수 있어요!</div>,
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 12,
        placement: 'right',
        disableScrolling: true, // 스크롤 방지
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: '[data-testid="RoadmapSectionItem"]:nth-of-type(1)',
        title: '카테고리 선택',
      },
      {
        content: <div>선택한 카테고리에 대한 TIL을 생성할 수 있어요.</div>,
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 12,
        placement: 'right',
        disableScrolling: true, // 스크롤 방지
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: '[data-testid="plusButton2"]:nth-of-type(1)',
        title: 'TIL 추가하기',
      },
      {
        content: (
          <div>
            작성하신 학습일지는
            <br />
            검색을 통해 찾을 수 있습니다.
          </div>
        ),
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 20,

        placement: 'bottom',
        disableScrolling: true, // 스크롤 방지
        spotlightClicks: true, // 스포트 라이트된 영역 클릭
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: searchRef.current!,
        title: '검색창',
      },
      {
        content: (
          <div>
            또한 작성된 학습일지는 카테고리별로
            <br />
            개인 TIL, 로드맵 TIL 으로 나뉘어 저장됩니다.
          </div>
        ),
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 20,

        placement: 'bottom',
        disableScrolling: true, // 스크롤 방지
        spotlightClicks: true, // 스포트 라이트된 영역 클릭
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: '[data-testid="categorySection"]:nth-of-type(1)',
        title: '카테고리',
      },
      {
        content: (
          <div>
            학습일지를 작성하면 히스토리에 장미가 심어집니다.
            <br />
            꾸준한 학습을 통해 장미밭을 가꿔보세요.
          </div>
        ),
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        placement: 'right',
        spotlightPadding: 20,

        disableScrolling: true, // 스크롤 방지
        spotlightClicks: true, // 스포트 라이트된 영역 클릭
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: historyRef.current!,
        title: '히스토리',
      },

      {
        content: (
          <div>
            온보딩을 진행해주셔서 감사합니다.
            <br />
            TILy 와 함께 성장해봐요!
          </div>
        ),
        disableBeacon: true, // 초기에 Step 시작되게 하는 기능
        disableOverlayClose: true, // 오버레이 클릭시 닫히는 기능
        hideCloseButton: true, // 닫기 버튼
        hideFooter: false,
        spotlightPadding: 20,

        placement: 'center',
        disableScrolling: true, // 스크롤 방지
        spotlightClicks: true, // 스포트 라이트된 영역 클릭
        showSkipButton: false,
        styles: {
          options: {
            zIndex: 10000, // backdrop z-index
          },
        },
        target: 'body',
        title: '감사합니다.',
      },
    ]);
  }, []);

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data;

    if ((action === ACTIONS.PREV, index === 1)) {
      setIsModalOpen(false);
    }

    if ((action === ACTIONS.PREV, index === 6)) {
      setIsModalOpen(true);
    }

    if (([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      setStepIndex(0);
      setRun(false);
    } else if (([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND] as string[]).includes(type)) {
      const nextStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      if (index === 0) {
        // title 안녕하세요.
        setStepIndex(nextStepIndex);
        setRun(false);

        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 1) {
        // title: 'TIL 작성하기',

        setStepIndex(nextStepIndex);
        setIsModalOpen(true);

        setRun(false);
        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 2) {
        // title: 'TIL 선택하기',

        setStepIndex(nextStepIndex);

        setRun(false);
        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 3) {
        // title: 'TIL 학습 종류 선택',

        setStepIndex(nextStepIndex);
        setRun(false);
        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 4) {
        // title: '카테고리 생성',

        setStepIndex(nextStepIndex);
        setRun(false);
        setTimeout(() => {
          setIsCategoryNextStep(true);
          setRun(true);
        }, 300);
      } else if (index === 5) {
        // title: '카테고리 선택',

        setStepIndex(nextStepIndex);
        setRun(false);
        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 6) {
        // title: 'TIL 추가하기',

        setStepIndex(nextStepIndex);
        setIsModalOpen(false);
        setRun(false);
        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 7) {
        // title: '검색창',

        setStepIndex(nextStepIndex);
        setRun(false);

        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 8) {
        // title: '카테고리',

        setStepIndex(nextStepIndex);
        setRun(false);

        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 9) {
        // title: '히스토리',

        setStepIndex(nextStepIndex);
        setRun(false);

        setTimeout(() => {
          setRun(true);
        }, 300);
      } else if (index === 10) {
        // title: '감사합니다.',

        setStepIndex(nextStepIndex);
        localStorage.setItem('mainOnboarding', 'true');
        setRun(false);
      }
    }
  };

  return {
    state: {
      run,
      stepIndex,
      steps,
      isModalOpen,
      isCategoryNextStep,
      isOnboarding,
    },
    ref: {
      historyRef,
      searchRef,
      TILButtonRef,
    },
    callback: {
      handleJoyrideCallback,
    },
  };
};
