import { useEffect, useState } from 'react';

const useGuestGNB = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled };
};

export default useGuestGNB;
