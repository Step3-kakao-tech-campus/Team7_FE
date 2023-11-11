import Image from 'next/image';
import * as Styled from './style';

interface PlusButtonProps {
  testid?: string;
  title: string;
  onClick?: () => void;
}

const PlusButton = (props: PlusButtonProps) => {
  const { testid, title, onClick } = props;

  return (
    <Styled.PlusButton data-testid={testid} onClick={onClick}>
      <Image src="/assets/icons/ic_plusButton.svg" alt="추가버튼" width={20} height={20} />
      <span>{title}</span>
    </Styled.PlusButton>
  );
};

export default PlusButton;
