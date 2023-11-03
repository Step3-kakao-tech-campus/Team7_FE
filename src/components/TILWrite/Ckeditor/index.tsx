import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useGetTil, usePatchTil } from '@/api/hooks/til';
import { defaultData } from '@/components/TILWrite/Ckeditor/defaultData';
import { editorConfiguration } from './plugin';
import * as Styled from './style';

interface CkEditorProps {
  handleTILContent: (content: string) => void;
  handleAutoSaveTime: {
    activeAutoSave: () => void;
    clearAutoSave: () => void;
  };
}

const CkEditor = (props: CkEditorProps) => {
  const { handleTILContent, handleAutoSaveTime } = props;

  const [prevContent, setPrevContent] = useState<string>('');

  const { query } = useRouter();
  const { patchTil } = usePatchTil();
  const { tilDetail } = useGetTil({
    roadmapId: Number(query.roadmapId),
    stepId: Number(query.stepId),
    tilId: Number(query.tilId),
  });

  const autoSaveTIL = (TILContent: string) => {
    patchTil({
      roadmapId: Number(query.roadmapId),
      stepId: Number(query.stepId),
      tilId: Number(query.tilId),
      content: TILContent,
    });
  };

  return (
    <Styled.Root>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={tilDetail ? tilDetail.content || '' : defaultData}
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
          if (prevContent !== editor.getData() && editor.getData() !== '') {
            autoSaveTIL(editor.getData());
            handleAutoSaveTime.activeAutoSave();
          }
          setPrevContent(editor.getData());
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
    </Styled.Root>
  );
};

export default CkEditor;
