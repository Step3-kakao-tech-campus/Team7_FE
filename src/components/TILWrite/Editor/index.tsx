import type { BlockNoteEditor } from '@blocknote/core';
import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote, lightDefaultTheme } from '@blocknote/react';
import type { Theme } from '@blocknote/react';
import styles from './index.module.css';
import * as Styled from './style';

// Our <Editor> component we can reuse later
const Editor = () => {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    // Sets attributes on DOM elements in the editor.
    domAttributes: {
      // Adds a class to all `blockContainer` elements.
      blockContainer: {
        class: styles.blockContainer,
      },
    },
  });

  // Renders the editor instance using a React component.
  return (
    <Styled.Root>
      <BlockNoteView
        editor={editor}
        // Adding the custom themes. The editor will use the browser settings to
        // determine if the light or dark theme is used.
        theme={customTheme}
      />
    </Styled.Root>
  );
};

export default Editor;

// Custom red light theme
const lightCustomTheme = {
  type: 'light',
  colors: lightDefaultTheme.colors,
  borderRadius: lightDefaultTheme.borderRadius,
  fontFamily: 'Pretendard, sans-serif',
  componentStyles: () => ({
    // Adds basic styling to the editor.
    Editor: {
      fontSize: '20px',
    },
    // Makes all hovered dropdown & menu items blue.
  }),
} satisfies Theme;

// Custom red dark theme
const darkCustomTheme = {
  ...lightCustomTheme,
  type: 'dark',
} satisfies Theme;

// Combining the custom themes into a single theme object.
const customTheme = {
  light: lightCustomTheme,
  dark: darkCustomTheme,
};
