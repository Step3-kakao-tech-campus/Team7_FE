import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import TILY_LINKS from '@/constants/links';
import type { Layout } from '@/utils/layout';
import { accessTokenAtom } from '../states/accessTokenAtoms';

function withAuth(WrappedComponent: Layout) {
  return function (props: any) {
    const router = useRouter();
    const accessToken = useRecoilValue(accessTokenAtom);

    useEffect(() => {
      if (accessToken === null) {
        router.replace(TILY_LINKS.login());
      }
    });

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
