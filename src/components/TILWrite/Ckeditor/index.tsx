import axios from 'axios';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import type ClassicEditor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as Styled from './style';

type EditorDemoState = {
  documents: string;
  documentID: number;
  editor: ClassicEditor | null;
};

const CkEditor = () => {
  const [state, setState] = useState<EditorDemoState>({
    documents: '',
    documentID: 0,
    editor: null,
  });

  const customUploadAdapter = (loader) => {
    return {
      upload() {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          loader.file.then((file) => {
            formData.append('image', file);
            formData.append('key', '6a18ed9fbcb9bcdac5cfe389fd389fdc');
            axios
              .post('https://api.imgbb.com/1/upload', formData)
              .then((res) => {
                resolve({
                  default: res.data.data.url,
                });
              })
              .catch((err) => reject(err));
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return customUploadAdapter(loader);
    };
  }

  const editorConfiguration = {
    toolbar: [
      'imageUpload',
      'findAndReplace',
      '|',
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'fontColor',
      'fontBackgroundColor',
      '|',
      'outdent',
      'indent',
      'alignment',
      '|',
      'blockQuote',
      'link',
      'horizontalLine',
      'insertTable',
      'bulletedList',
      'codeBlock',
    ],
    extraPlugins: [uploadPlugin],
  };
  const SAMPLE_READ_ONLY_LOCK_ID = 'Integration Sample';

  const toggleReadOnly = () => {
    const editor = state.editor!;

    if (editor.isReadOnly) {
      editor.disableReadOnlyMode(SAMPLE_READ_ONLY_LOCK_ID);
    } else {
      editor.enableReadOnlyMode(SAMPLE_READ_ONLY_LOCK_ID);
    }
  };

  return (
    <Styled.Root>
      {/* <button onClick={() => toggleReadOnly()}>Toggle read-only mode</button> */}
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={`<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p></p>"`}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);

          setState((prevState) => ({ ...prevState, editor }));
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
