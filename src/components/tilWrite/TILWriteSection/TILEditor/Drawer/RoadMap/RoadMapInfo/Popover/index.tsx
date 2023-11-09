import { type PropsWithChildren, useState } from 'react';
import { keyframes, css } from '@emotion/react';
import * as Popover from '@radix-ui/react-popover';
import * as Styled from './style';

interface RoadmapPopoverProps {
  userRole?: string;
}

const RoadmapPopover = (props: PropsWithChildren<RoadmapPopoverProps>) => {
  const { children, userRole } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger
        css={css`
          overflow: hidden;
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {children}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content side="top" css={animatedStyle}>
          <Styled.Content>
            {userRole !== 'member'
              ? '로드맵 관리 페이지로 이동하시겠습니까?'
              : '로드맵 상세 페이지로 이동하시겠습니까?'}
          </Styled.Content>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default RoadmapPopover;

// 애니메이션 keyframes 정의
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

// 애니메이션 스타일을 emotion의 css 함수로 정의
const animatedStyle = css`
  animation:
    ${fadeIn} 100ms ease-out,
    ${scaleIn} 100ms ease-out;
`;
