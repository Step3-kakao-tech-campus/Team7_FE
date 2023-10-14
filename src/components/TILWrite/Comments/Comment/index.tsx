import { useRef, useState } from 'react';
import Avatar from '@/components/common/Avatar';
import ContextMenu from '@/components/common/ContextMenu';
import Icon from '@/components/common/Icon';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

interface CommentProps {}

const Comment = (props: CommentProps) => {
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
          <Avatar imageSize={32} iconName="ic_profile" />
          <Styled.Name>홍길동</Styled.Name>
          <Styled.Date>9시간 전</Styled.Date>
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
            <Styled.ContextMenus ref={contextRef}>
              <ContextMenu.Menu>수정하기</ContextMenu.Menu>
              <ContextMenu.Menu>삭제하기</ContextMenu.Menu>
            </Styled.ContextMenus>
          )}
        </Styled.Right>
      </Styled.Header>

      <Styled.Text>할 슈 있 다 ~ 꿈은 이루어진다...⭐️</Styled.Text>
    </Styled.Root>
  );
};

export default Comment;
