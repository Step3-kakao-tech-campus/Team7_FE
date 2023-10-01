import '@emotion/react';
import type { EmotionTheme } from './index';

declare module '@emotion/react' {
  export interface Theme extends EmotionTheme {}
}
