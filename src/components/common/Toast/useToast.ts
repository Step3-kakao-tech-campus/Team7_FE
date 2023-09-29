import { useContext } from 'react';
import { ToastContext } from '@/components/common/Toast/provider';
import type { ToastOption } from '@/components/common/Toast/provider';

export const useToast = () => {
  const controller = useContext(ToastContext);

  return {
    show(toast: ToastOption) {
      controller.show(toast);
    },
  };
};
