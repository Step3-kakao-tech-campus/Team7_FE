import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useDeleteComments } from '@/api/hooks/til';
import type { Comment as CommentType } from '@/api/type';
import Avatar from '@/components/common/Avatar';
import ContextMenu from '@/components/common/ContextMenu';
import Icon from '@/components/common/Icon';
import * as Styled from '@/components/tilWrite/TILWriteSection/TILEditor/Drawer/Comments/Comment/style';
import { useModalState } from '@/hooks/useModalState';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

// 플러그인과 로케일 설정
dayjs.extend(relativeTime);
dayjs.locale('ko');

interface CommentProps extends CommentType {
  handlePatchModalOpen: () => void;
  handleSelectComment: (commentId: number) => void;
}

const Comment = (props: CommentProps) => {
  const { handlePatchModalOpen, handleSelectComment, id, name, image, content, isOwner, createDate } = props;

  const {
    isOpen: isContextMenuOpen,
    handleClose: handleCloseMenu,
    handleToggle: handleToggleMenu,
  } = useModalState(false);
  const contextRef = useRef<HTMLDivElement>(null);
  const { deleteCommentsAsync } = useDeleteComments();
  const { query } = useRouter();

  const handleOpenContextMenu = () => {
    handleToggleMenu();
    handleSelectComment(id);
  };

  const handleSelectPatchComment = () => {
    handleCloseMenu();
    handlePatchModalOpen();
  };

  const handleSelectDeleteComment = () => {
    handleCloseMenu();
    deleteCommentsAsync({
      param: { tilId: Number(query.tilId), commentId: id },
    });
  };

  useOnClickOutside(contextRef, () => {
    handleCloseMenu();
  });

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Left>
          <Avatar imageSize={32} imageUrl={image} alt="프로필 이미지" />
          <Styled.Name>{name}</Styled.Name>
          <Styled.Date>{dayjs(createDate).from(dayjs())}</Styled.Date>
        </Styled.Left>

        <Styled.Right>
          <Icon
            onClick={handleOpenContextMenu}
            css={Styled.IconStyles}
            iconName="ic_moreDots"
            imageSize={18}
            ext="svg"
            alt="설정"
          />
          {isContextMenuOpen && (
            <>
              {(() => {
                // 자신이 글을 작성했을때 들어올 수 있는 페이지 이다.
                // 자신의 댓글이라면 수정, 삭제가 가능하다.
                // 다른 사람의 댓글이라면 삭제하기만 가능하다.
                switch (isOwner) {
                  case true:
                    return (
                      <Styled.ContextMenus ref={contextRef}>
                        <ContextMenu.Menu onClick={handleSelectPatchComment}>수정하기</ContextMenu.Menu>
                        <ContextMenu.Menu onClick={handleSelectDeleteComment}>삭제하기</ContextMenu.Menu>
                      </Styled.ContextMenus>
                    );
                  case false:
                    return (
                      <Styled.ContextMenus ref={contextRef}>
                        <ContextMenu.Menu onClick={handleSelectDeleteComment}>삭제하기</ContextMenu.Menu>
                      </Styled.ContextMenus>
                    );
                }
              })()}
            </>
          )}
        </Styled.Right>
      </Styled.Header>

      <Styled.Text>{content}</Styled.Text>
    </Styled.Root>
  );
};

export default Comment;
