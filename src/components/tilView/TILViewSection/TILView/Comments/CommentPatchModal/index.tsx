import { useState, type FormEvent, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useGetTils, usePatchComments } from '@/api/hooks/til';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import TextArea from '@/components/common/TextArea';
import * as Styled from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Comments/CommentPatchModal/style';

interface CommentPatchModalProps {
  selectedCommentId: number;
  isOpen: boolean;
  onClose: () => void;
}

const CommentPatchModal = (props: CommentPatchModalProps) => {
  const { selectedCommentId, isOpen, onClose } = props;

  const { query } = useRouter();
  const [content, setContent] = useState('');
  const { patchCommentsAsync } = usePatchComments();
  const { tilDetail } = useGetTils({
    tilId: Number(query.tilId),
  });

  useEffect(() => {
    const comment = tilDetail?.comments.find((comment) => comment.id === selectedCommentId);
    setContent(comment?.content || '');
  }, [tilDetail, selectedCommentId, isOpen]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patchCommentsAsync({
      param: {
        tilId: Number(query.tilId),
        commentId: selectedCommentId,
      },
      body: {
        content,
      },
    });
    onClose();
    setContent('');
  };

  const handleClose = useCallback(() => {
    setContent('');
    onClose();
  }, []);

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
          <Button onClick={handleClose} type="button" css={Styled.CancelButtonStyles} variant="ghost">
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
