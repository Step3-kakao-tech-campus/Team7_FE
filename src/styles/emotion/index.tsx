const colors = {
  white: '#ffffff',
  black: '#0F172A',
  rose: '#EF4365',
  red: '#DC2626',
  gray_100: '#F8F9FA',
  gray_200: '#F1F3F5',
  gray_300: '#F4F4F5',
  gray_400: '#E4E4E7',
  gray_500: '#E5E5E5',
  gray_600: '#BBBBBB',
  gray_700: '#8D8D8D',
  blue_gray_100: '#F7F7FB',
  blue_gray_200: '#D9E2EA',
  blue_gray_300: '#CBD5E1',
  blue_gray_400: '#94A3B8',
  blue: '#3B82F6;',
} as const;

export const emotionTheme = { colors } as const;

export type EmotionTheme = typeof emotionTheme;
