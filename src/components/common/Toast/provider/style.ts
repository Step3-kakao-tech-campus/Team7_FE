import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ToastContainer = styled.div<{ animation: string; position?: string }>`
  display: flex;
  position: fixed;
  width: 100%;
  justify-content: center;

  z-index: ${({ theme }) => theme.layer.toast};
  // fowards 애니메이션의 마지막 상태를 유지
  animation: 0.5s forwards ${(props) => props.animation};

  ${({ position }) => css`
    ${position === 'bottom' &&
    css`
      bottom: 50px;
      left: 0px;
      justify-content: center;
      transform: translateY(300%);
    `}

    ${position === 'right' &&
    css`
      top: 80px;
      right: 20px;

      justify-content: flex-end;
      transform: translateX(100%);
    `}
  `};

  @keyframes slide-bottom-in {
    from {
      transform: translateY(300%);
    }

    to {
      transform: translateY(0%);
    }
  }

  @keyframes slide-bottom-out {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(300%);
    }
  }

  @keyframes slide-bottom-reset {
    from {
      transform: translateY(300%);
    }

    to {
      transform: translateY(300%);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(100%);
    }
  }

  @keyframes slide-right-reset {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(100%);
    }
  }
`;
