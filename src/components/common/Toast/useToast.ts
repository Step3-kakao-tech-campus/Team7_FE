import { useContext } from 'react';
import { ToastContext } from '@/components/common/Toast/provider';
import type { ToastOption } from '@/components/common/Toast/provider';

export const useToast = () => {
  const controller = useContext(ToastContext);

  return {
    showBottom(toast: ToastOption) {
      controller.showBottom(toast);
    },
    showRight(toast: ToastOption) {
      controller.showRight(toast);
    },
  };
};
