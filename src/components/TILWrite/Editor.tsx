import type { BlockNoteEditor } from '@blocknote/core';
import '@blocknote/core/style.css';
import { BlockNoteView, useBlockNote, lightDefaultTheme } from '@blocknote/react';
import type { Theme } from '@blocknote/react';

// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote();

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      // Adding the custom themes. The editor will use the browser settings to
      // determine if the light or dark theme is used.
      theme={customTheme}
    />
  );
}

// Custom red light theme
const lightCustomTheme = {
  type: 'light',
  colors: lightDefaultTheme.colors,
  borderRadius: lightDefaultTheme.borderRadius,
  fontFamily: 'Pretendard, sans-serif',
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
