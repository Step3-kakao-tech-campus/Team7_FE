import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { accessTokenAtom } from '@/components/auth/states/accessTokenAtoms';
import { tilyLinks } from '@/constants/links';
import { removeCookie } from '@/utils/cookie';

export const useAuth = () => {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenAtom);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken]);

  return {
    logout() {
      removeCookie('accessToken');
      router.push(tilyLinks.home());
    },
    isLoggedIn,
  };
};

export default useAuth;
