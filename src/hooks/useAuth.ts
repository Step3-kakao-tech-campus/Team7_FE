import { useRouter } from 'next/router';
import TILY_LINKS from '@/constants/links';
import { removeCookie } from '@/utils/cookie';

export const useAuth = () => {
  const router = useRouter();

  return {
    logout() {
      removeCookie('accessToken');
      router.push(TILY_LINKS.home());
    },
  };
};

export default useAuth;
