import axios from 'axios';
import { useToast } from '@/components/common/Toast/useToast';

export const useApiError = () => {
  const toast = useToast();

  const handleError = (error: unknown) => {
    // axios error
    if (axios.isAxiosError(error)) {
      if (error.response?.data.code === 500) {
        toast.showBottom({
          message: '에러가 발생했습니다.',
          isError: true,
        });
      } else if (error.response?.data.message === 'TIL 제목을 입력해주세요.') {
        toast.showBottom({
          message: 'STEP을 선택해주세요.',
          isError: true,
        });
      } else {
        toast.showBottom({
          message: error.response?.data.message || '에러가 발생했습니다.',
          isError: true,
        });
      }
    }

    if (!axios.isAxiosError(error)) {
      // axios error가 아닌 경우
      toast.showBottom({
        message: '에러가 발생했습니다.',
        isError: true,
      });
    }
  };

  return { handleError };
};
