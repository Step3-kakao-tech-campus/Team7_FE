import { useMemo } from 'react';

const useQueryParam = (value: any) => {
  return useMemo(() => (Array.isArray(value) ? value[0] : value) || '', [value]);
};

export default useQueryParam;
