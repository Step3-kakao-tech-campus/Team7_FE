import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { accessTokenAtom } from '@/components/auth/states/accessTokenAtoms';
import { tilyLinks } from '@/constants/links';

export const useAuth = () => {
  const router = useRouter();
  const resetAccessToken = useResetRecoilState(accessTokenAtom);
  const accessToken = useRecoilValue(accessTokenAtom);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!accessToken);
  }, [accessToken]);

  return {
    logout() {
      resetAccessToken();
      router.push(tilyLinks.intro());
    },
    isLoggedIn,
  };
};

export default useAuth;
