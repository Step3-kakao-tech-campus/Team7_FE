import { atom } from 'recoil';
import { axiosInstance } from '@/api';
import { getCookie } from '@/utils/cookie';

export const accessTokenAtom = atom<string | null>({
  key: 'accessToken',
  default: null,
  effects: [
    ({ setSelf }) => {
      const token = getCookie('accessToken');
      if (token !== null) {
        setSelf(token);
        axiosInstance.defaults.headers.common['Authorization'] = token;
      }
    },
  ],
});
