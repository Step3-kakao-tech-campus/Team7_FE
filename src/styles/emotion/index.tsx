const colors = {
  white: '#ffffff',
  black: '#000000',
} as const;

export const emotionTheme = { colors } as const;

export type EmotionTheme = typeof emotionTheme;
