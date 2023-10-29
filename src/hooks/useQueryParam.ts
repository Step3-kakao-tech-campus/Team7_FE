import { useMemo } from 'react';

const useQueryParam = (value) => {
  return useMemo(() => (Array.isArray(value) ? value[0] : value) || '', [value]);
};

export default useQueryParam;
