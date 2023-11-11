import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useRouter } from 'next/router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useGetTils } from '@/api/hooks/til';
import * as Styled from '@/components/tilWrite/TILWriteSection/TILEditor/Ckeditor/style';

const CkEditor = () => {
  const { query } = useRouter();

  const { tilDetail } = useGetTils({
    tilId: Number(query.tilId),
  });

  return (
    <Styled.Root isReadOnly={true}>
      <CKEditor
        editor={Editor}
        data={tilDetail?.submitContent || ''}
        onReady={(editor) => {
          editor.enableReadOnlyMode('');
        }}
      />
    </Styled.Root>
  );
};

export default CkEditor;
