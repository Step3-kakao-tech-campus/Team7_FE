import styled from '@emotion/styled';

export const ToastContainer = styled.div<{ animation: string }>`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  left: 0px;
  transform: translateY(300%);
  width: 100%;
  z-index: 100;
  // fowards 애니메이션의 마지막 상태를 유지
  animation: 0.3s forwards ${(props) => props.animation};

  @keyframes slide-in {
    from {
      transform: translateY(300%);
    }

    to {
      transform: translateY(0%);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0%);
    }

    to {
      transform: translateY(300%);
    }
  }

  @keyframes slide-reset {
    from {
      transform: translateY(300%);
    }

    to {
      transform: translateY(300%);
    }
  }
`;
