import { useEffect, useState } from 'react';
import { useToast } from '@/components/common/Toast/useToast';

export const useChromeExtension = () => {
  const [isExtensionInstall, setIsExtensionInstall] = useState(false);
  const toast = useToast();

  // 익스텐션 설치 여부 확인
  useEffect(() => {
    const isInstalled = document.documentElement.getAttribute('myextension');

    if (isInstalled) {
      setIsExtensionInstall(true);
    } else {
      setIsExtensionInstall(false);
    }
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

  return { isExtensionInstall };
};
