import type { PropsWithChildren } from 'react';
import { createContext } from 'react';
import { css, Global } from '@emotion/react';
import { emotionTheme } from '@/styles/emotion';

interface ResponsiveContextValue {
  mobileOnlyClassName: string;
  desktopOnlyClassName: string;
}

export const ResponsiveContext = createContext<ResponsiveContextValue>({} as ResponsiveContextValue);

const ResponsiveProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const { mediaQuery } = emotionTheme;

  const mobileOnlyClassName = `responsive-mobile-only`;
  const desktopOnlyClassName = `responsive-desktop-only`;

  return (
    <ResponsiveContext.Provider value={{ mobileOnlyClassName, desktopOnlyClassName }}>
      <Global
        styles={css`
          .${mobileOnlyClassName} {
            display: none !important;
          }

          .${desktopOnlyClassName} {
            display: block !important;
          }

          @media ${mediaQuery.md} {
            .${mobileOnlyClassName} {
              display: block !important;
            }

            .${desktopOnlyClassName} {
              display: none !important;
            }
          }
        `}
      />
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveProvider;
