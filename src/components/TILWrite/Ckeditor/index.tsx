import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useEffect, useRef, useState } from 'react';
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
  const [isUserExcuteSave, setIsUserExcuteSave] = useState<boolean>(false);
  const [editor, setEditor] = useState<any>();

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

    toast.showRight({
      message: '자동 저장되었습니다.',
    });
  };

  const focusEditor = () => {
    editor.model.change((writer: any) => {
      writer.setSelection(writer.createPositionAt(editor.model.document.getRoot(), 'end'));
      editor.editing.view.focus();
    });
  };

  // 유저가 입력을 하고 있는지에 대한 상태를 관리하는 useEffect
  // 유저가 입력을 멈추면 디바운스가 동작하여 10000ms 후에 자동저장 요청을 보낸다.
  // isUserExcuteSave 는 유저가 Ctrl + S 또는 Blur 를 통해 저장을 했을떄 자동저장을 막기 위해 사용한다.
  useEffect(() => {
    if (content === '') return;

    const debounce = setTimeout(() => {
      autoSaveTIL(content);
      handleAutoSaveTime.activeAutoSave();
    }, 10000);

    if (isUserExcuteSave) {
      clearTimeout(debounce);
    }

    return () => {
      clearTimeout(debounce);
    };
  }, [prevContent, content, isUserExcuteSave]);

  return (
    <Styled.Root onClick={focusEditor}>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        data={tilDetail ? tilDetail.content || defaultData : defaultData}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          setEditor(editor);
          handleTILContent(editor.getData());
          setPrevContent(editor.getData());
          let throttle = false;

          editor.keystrokes.set('Ctrl+S', (keyEvtData, cancel) => {
            // 이벤트를 취소하여 브라우저의 기본 동작을 방지합니다.
            cancel();

            // 여기에 사용자 정의 동작을 추가합니다.
            // Ctrl+S 로 저장은 쓰로틀을 적용에 5초에 한번씩 발생하도록 합니다.
            if (throttle) return;
            if (!throttle) {
              throttle = true;
              setIsUserExcuteSave(true);
              autoSaveTIL(editor.getData());
              setTimeout(async () => {
                throttle = false;
              }, 3000);
            }
          });
        }}
        onChange={(event, editor) => {
          handleTILContent(editor.getData());
          setContent(editor.getData());
          setIsUserExcuteSave(false);
        }}
        onBlur={(event, editor) => {
          if (isContentChange(prevContent, editor.getData()) && isContentNotEmpty(editor.getData())) {
            autoSaveTIL(editor.getData());
            setIsUserExcuteSave(true);
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

const isContentChange = (prevContent: string, content: string) => {
  return prevContent !== content;
};

const isContentNotEmpty = (content: string) => {
  return content !== '';
};
