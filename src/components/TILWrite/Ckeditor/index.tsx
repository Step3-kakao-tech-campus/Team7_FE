import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { defaultData } from '@/components/TILWrite/Ckeditor/defaultData';
import { editorConfiguration } from './plugin';
import * as Styled from './style';

const CkEditor = () => {
  return (
    <Styled.Root>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={defaultData}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Styled.Root>
  );
};

export default CkEditor;
