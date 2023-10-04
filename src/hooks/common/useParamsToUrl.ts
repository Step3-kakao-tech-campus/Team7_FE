import qs from 'qs';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';

export const useParamsToUrl = () => {
  const router = useRouter();

  const addParamsToUrl = (queryParams: NextRouter['query']) => {
    router.push(
      // qs.stringify: 객체를 쿼리스트링으로 변환
      `${router.pathname}${qs.stringify(queryParams, {
        addQueryPrefix: true, // prefix로 ?를 붙여준다.
      })}`,
      undefined, // 두번째 옵션은 사용하지 않는다.
      {
        scroll: false, // 라우터 이동시 스크롤 위치 고정
      },
    );
  };
  return { addParamsToUrl };
};
