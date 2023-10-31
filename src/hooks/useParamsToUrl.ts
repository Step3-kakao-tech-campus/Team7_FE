import qs from 'qs';
import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';

export const useParamsToUrl = () => {
  const router = useRouter();

  const replaceDynamicPath = (path: string, query: any) => {
    return path.replace(/\[(\w+)\]/g, (match, key) => query[key] || match);
  };

  const addParamsToUrl = (queryParams: NextRouter['query']) => {
    router.push(
      // qs.stringify: 객체를 쿼리스트링으로 변환
      `${replaceDynamicPath(router.pathname, router.query)}${qs.stringify(queryParams, {
        addQueryPrefix: true, // prefix로 ?를 붙여준다.
      })}`,
      undefined, // 두번째 옵션은 사용하지 않는다.
      {
        scroll: false, // 라우터 이동시 스크롤 위치 고정
      },
    );
  };

  const overlapParamsToUrl = (queryParams: NextRouter['query']) => {
    const mergedParams = { ...router.query, ...queryParams };

    router.push(
      // qs.stringify: 객체를 쿼리스트링으로 변환
      `${replaceDynamicPath(router.pathname, router.query)}${qs.stringify(mergedParams, {
        addQueryPrefix: true, // prefix로 ?를 붙여준다.
      })}`,
      undefined, // 두번째 옵션은 사용하지 않는다.
      {
        scroll: false, // 라우터 이동시 스크롤 위치 고정
      },
    );
  };

  // 현재 라우터에서 특정 쿼리를 제거하는 함수 (검색어를 )
  const deleteParamsFromUrl = (queryKey: string) => {
    delete router.query[queryKey];
    router.push(
      `${replaceDynamicPath(router.pathname, router.query)}${qs.stringify(router.query, {
        addQueryPrefix: true, // prefix로 ?를 붙여준다.
      })}`,
      undefined,
      {
        scroll: false,
      },
    );
  };

  return { addParamsToUrl, overlapParamsToUrl, deleteParamsFromUrl };
};
