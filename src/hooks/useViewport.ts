import { useEffect, useState } from 'react';

export interface IsMobile {
  isMobile: boolean;
}

/** @deprecated @components/common/Responsive를 대신 사용하세요. 모바일에서 초기 접속시 데스크톱 뷰가 잠깐 노출되는 문제가 있어요. */
const useViewport = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    setIsMobile(window.innerWidth <= 768 || window.outerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    width,
    height,
    isMobile,
  };
};

export default useViewport;
