const colors = {
  white: '#ffffff',
  black: '#0F172A',
  rose: '#EF4365',
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
  gray_900: '#868A8D',
  blue_gray_100: '#F7F7FB',
  blue_gray_200: '#D9E2EA',
  blue_gray_300: '#CBD5E1',
  blue_gray_400: '#94A3B8',
  blue: '#3B82F6;',
} as const;

const defaultEditorWidth = '70%';
const maxEditorWidth = '100%';
const resizeHandleWidth = '50px';

const layout = {
  defaultEditorWidth,
  maxEditorWidth,
  resizeHandleWidth,
  asideWidth: `${maxEditorWidth} - ${defaultEditorWidth} - ${resizeHandleWidth}`,
  headerHeight: '4rem',
  footerHeight: '4rem',
} as const;

const layer = {
  header: 1000,
  headerAlarm: 1000,
};

export const emotionTheme = { colors, layout, layer } as const;

export type EmotionTheme = typeof emotionTheme;
