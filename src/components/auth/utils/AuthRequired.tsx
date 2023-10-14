import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { tilyLinks } from '@/constants/links';
import type { Layout } from '@/utils/layout';
import { accessTokenAtom } from '../states/accessTokenAtoms';

function withAuth(WrappedComponent: Layout) {
  return function (props) {
    const router = useRouter();
    const accessToken = useRecoilValue(accessTokenAtom);

    if (accessToken === null) {
      router.replace(tilyLinks.login());
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
