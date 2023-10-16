import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useRouter } from 'next/router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useGetTil } from '@/api/hooks/til';
import { defaultData } from '@/components/TILWrite/Ckeditor/defaultData';
import { editorConfiguration } from './plugin';
import * as Styled from './style';

interface CkEditorProps {
  handleTILContent: (content: string) => void;
}

const CkEditor = (props: CkEditorProps) => {
  const { handleTILContent } = props;

  const { query } = useRouter();

  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  return (
    <Styled.Root>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={tilDetail ? tilDetail.content : defaultData}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          handleTILContent(editor.getData());
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
          handleTILContent(editor.getData());
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
