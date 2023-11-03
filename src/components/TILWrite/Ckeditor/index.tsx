import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useGetTil, usePatchTil } from '@/api/hooks/til';
import { defaultData } from '@/components/TILWrite/Ckeditor/defaultData';
import { useToast } from '@/components/common/Toast/useToast';
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

  const toast = useToast();

  const [content, setContent] = useState<string>('');
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

  // 유저가 입력을 하고 있는지에 대한 상태를 관리하는 useEffect
  // 유저가 입력을 멈추면 디바운스가 동작하여 10000ms 후에 자동저장 요청을 보낸다.
  useEffect(() => {
    if (content === '') return;

    const debounce = setTimeout(() => {
      autoSaveTIL(content);
      handleAutoSaveTime.activeAutoSave();
      toast.showRight({
        message: '자동 저장되었습니다.',
      });
    }, 10000);
    return () => clearTimeout(debounce);
  }, [prevContent, content]);

  return (
    <Styled.Root>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={tilDetail ? tilDetail.content || defaultData : defaultData}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          handleTILContent(editor.getData());
        }}
        onChange={(event, editor) => {
          console.log(event);
          const data = editor.getData();
          console.log({ event, editor, data });
          handleTILContent(editor.getData());
          setContent(editor.getData());
        }}
        onBlur={(event, editor) => {
          if (prevContent !== editor.getData() && editor.getData() !== '') {
            autoSaveTIL(editor.getData());
            toast.showRight({
              message: '자동 저장되었습니다.',
            });
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
