const colors = {
  white: '#ffffff',
  black: '#0F172A',
  rose: '#EA103C',
  rose_light: '#FFEEF1',
  red: '#DC2626',
  gray_100: '#F8F9FA',
  gray_200: '#F1F3F5',
  gray_300: '#F4F4F5',
  gray_400: '#E4E4E7',
  gray_500: '#E5E5E5',
  gray_600: '#BBBBBB',
  gray_700: '#8D8D8D',
  gray_800: '#94A3B8',
  gray_900: '#757575',
  blue_gray_100: '#F7F7FB',
  blue_gray_200: '#D9E2EA',
  blue_gray_300: '#CBD5E1',
  blue_gray_400: '#94A3B8',
  blue: '#3B82F6;',
  tableGray: '#e5e7eb',
} as const;

const defaultEditorWidth = '70%';
const maxEditorWidth = '100%';
const resizeHandleWidth = '50px';

const layout = {
  main: {
    GNBHeight: '4.5rem',
  },
  tilWrite: {
    defaultEditorWidth,
    maxEditorWidth,
    resizeHandleWidth,
    asideWidth: `${maxEditorWidth} - ${defaultEditorWidth} - ${resizeHandleWidth}`,
    headerHeight: '4rem',
    footerHeight: '4rem',
  },
} as const;

const layer = {
  header: 1000,
  headerAlarm: 1000,
  modalBackground: 9999,
  toast: 10000,
};

const mediaQuery = {
  xl: `screen and (max-width: 1280px)`,
  lg: `screen and (max-width: 1024px)`,
  md: `screen and (max-width: 768px)`,
  sm: `screen and (max-width: 640px)`,
  xs: `screen and (max-width: 425px)`,
  xxs: `screen and (max-width: 374px)`,
} as const;
// as const 를 해야 추론이 가능하다.

export const emotionTheme = { colors, layout, layer, mediaQuery } as const;

export type EmotionTheme = typeof emotionTheme;
