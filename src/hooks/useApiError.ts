import axios from 'axios';
import { useToast } from '@/components/common/Toast/useToast';

export const useApiError = () => {
  const toast = useToast();

  const handleError = (error: unknown) => {
    // axios error
    if (axios.isAxiosError(error)) {
      switch (true) {
        case error.response?.status === 400:
          toast.show({
            message: error.response?.data.message,
            isError: true,
          });
          break;

        default:
          toast.show({
            message: '에러가 발생했습니다.',
            isError: true,
          });
      }
    }

    if (!axios.isAxiosError(error)) {
      // axios error가 아닌 경우
      toast.show({
        message: '에러가 발생했습니다.',
        isError: true,
      });
    }
  };

  return { handleError };
};
