import { useEffect, useState } from 'react';
import { useToast } from '@/components/common/Toast/useToast';

export const useChromeExtension = () => {
  const toast = useToast();
  const [isChromeExtensionInstall, setIsChromeExtensionInstall] = useState(false);

  useEffect(() => {
    // 익스텐션으로 보낼 데이터 객체
    const detail = {
      message: '크롬익스텐션을 사용할 수 있습니까?',
    };
    const event = new CustomEvent('크롬익스텐션사용여부확인', { detail });
    document.dispatchEvent(event);

    const handleExtensionInstall = (event: CustomEvent<{ message: string }>) => {
      setIsChromeExtensionInstall(true);
    };

    document.addEventListener('크롬익스텐션사용여부확인', (event) =>
      handleExtensionInstall(event as CustomEvent<{ message: string }>),
    );

    return () => {
      document.removeEventListener('크롬익스텐션사용여부확인', (event) =>
        handleExtensionInstall(event as CustomEvent<{ message: string }>),
      );
    };
  }, []);

  // 크롬 익스텐션 실행 성공, 실패 여부 Listener
  useEffect(() => {
    const handleCustomEventError = (event: CustomEvent<{ message: string }>) => {
      toast.showBottom({ message: event.detail.message, isError: true });
    };

    const handleCustomEventSuccess = (event: CustomEvent<{ message: string }>) => {
      toast.showBottom({ message: event.detail.message });
    };

    document.addEventListener('크롬익스텐션에러', (event) =>
      handleCustomEventError(event as CustomEvent<{ message: string }>),
    );
    document.addEventListener('크롬익스텐션성공', (event) =>
      handleCustomEventSuccess(event as CustomEvent<{ message: string }>),
    );

    return () => {
      document.removeEventListener('크롬익스텐션에러', (event) =>
        handleCustomEventError(event as CustomEvent<{ message: string }>),
      );
      document.removeEventListener('크롬익스텐션성공', (event) =>
        handleCustomEventSuccess(event as CustomEvent<{ message: string }>),
      );
    };
  }, []);

  return { isChromeExtensionInstall };
};
