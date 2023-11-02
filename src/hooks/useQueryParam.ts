import { useMemo } from 'react';
import { useRouter } from 'next/router';

const useQueryParam = (queryKey: string) => {
  const router = useRouter();
  const value = router.query[queryKey];

  return useMemo(() => (Array.isArray(value) ? value[0] : value) || '', [value]);
};

export default useQueryParam;
