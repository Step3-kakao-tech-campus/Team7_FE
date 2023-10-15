import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRef, useState } from 'react';
import type { Comment as CommentType } from '@/api/type';
import Avatar from '@/components/common/Avatar';
import ContextMenu from '@/components/common/ContextMenu';
import Icon from '@/components/common/Icon';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

// 플러그인과 로케일 설정
dayjs.extend(relativeTime);
dayjs.locale('ko');

interface CommentProps extends CommentType {}

const Comment = (props: CommentProps) => {
  const { name, image, content, isOwner, date } = props;

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const contextRef = useRef<HTMLDivElement>(null);

  const handleOpenContextMenu = () => {
    setIsContextMenuOpen((prev) => !prev);
  };

  useOnClickOutside(contextRef, () => {
    setIsContextMenuOpen(false);
  });

  return (
    <Styled.Root>
      <Styled.Header>
        <Styled.Left>
          <Avatar imageSize={32} imageUrl={image} alt="프로필 이미지" />
          <Styled.Name>{name}</Styled.Name>
          <Styled.Date>{dayjs(date).from(dayjs())}</Styled.Date>
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
                        <ContextMenu.Menu>수정하기</ContextMenu.Menu>
                        <ContextMenu.Menu>삭제하기</ContextMenu.Menu>
                      </Styled.ContextMenus>
                    );
                  case false:
                    return (
                      <Styled.ContextMenus ref={contextRef}>
                        <ContextMenu.Menu>삭제하기</ContextMenu.Menu>
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
