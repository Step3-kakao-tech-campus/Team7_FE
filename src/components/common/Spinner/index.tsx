import styled from '@emotion/styled';

export interface Props {
  width?: number;
  height?: number;
  className?: string;
}

const Spinner = (props: Props) => {
  const { width, height, className } = props;

  return (
    <Root className={className} width={width} height={height}>
      <div />
      <div />
      <div />
      <div />
    </Root>
  );
};

export default Spinner;

const Root = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${({ width }) => (width ? `${width}rem` : '2.1rem')};
  height: ${({ height }) => (height ? `${height}rem` : '2.1rem')};
  margin-right: 0.5rem;
  margin-bottom: 0.125em;
  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${({ width }) => (width ? `${width}rem` : '2.1rem')};
    height: ${({ height }) => (height ? `${height}rem` : '2.1rem')};
    border: ${({ theme }) => `2px solid ${theme.colors.white}`};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => `${theme.colors.white} transparent transparent transparent`};
  }

  & > div:nth-of-type(1) {
    animation-delay: -0.45s;
  }

  & > div:nth-of-type(2) {
    animation-delay: -0.3s;
  }

  & > div:nth-of-type(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
