import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/router';
import { usePatchComment } from '@/api/hooks/til';
import * as Styled from '@/components/TILWrite/TILWriteSection/TILEditor/Drawer/Comments/CommentPatchModal/style';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import TextArea from '@/components/common/TextArea';

interface CommentPatchModalProps {
  selectedCommentId: number;
  isOpen: boolean;
  onClose: () => void;
}

const CommentPatchModal = (props: CommentPatchModalProps) => {
  const { selectedCommentId, isOpen, onClose } = props;

  const { query } = useRouter();
  const [content, setContent] = useState('');
  const { patchComment } = usePatchComment();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patchComment({
      roadmapId: Number(query.roadmapId),
      stepId: Number(query.stepId),
      tilId: Number(query.tilId),
      commentId: selectedCommentId.toString(),
      content,
    });
    onClose();
    setContent('');
  };

  if (!isOpen) return null;

  return (
    <Modal
      css={Styled.ModalContainerStyles}
      modalContentStyles={Styled.ModalContentStyles}
      isOpen={isOpen}
      onClose={onClose}>
      <Styled.ModalTitle>코멘트 수정</Styled.ModalTitle>
      <Styled.Container onSubmit={onSubmit}>
        <TextArea css={Styled.TextAreaStyles} rows={5} value={content} onChange={(e) => setContent(e.target.value)} />

        <Styled.ButtonContainer>
          <Button onClick={onClose} type="button" css={Styled.CancelButtonStyles} variant="ghost">
            취소
          </Button>
          <Button type="submit" css={Styled.ConfirmButtonStyles} variant="default">
            확인
          </Button>
        </Styled.ButtonContainer>
      </Styled.Container>
    </Modal>
  );
};

export default CommentPatchModal;
