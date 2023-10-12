import { atom } from 'recoil';
import { tokenStorage } from '@/utils/accessToken';

export const accessTokenAtom = atom<string | null>({
  key: 'accessToken',
  default: null,
  effects: [
    ({ setSelf, onSet }) => {
      const token = tokenStorage.get();
      if (token !== null) {
        setSelf(token);
      }

      onSet((token, _, isReset) => {
        if (isReset || token == null) {
          tokenStorage.remove();
        } else {
          tokenStorage.set(token);
        }
      });
    },
  ],
});
