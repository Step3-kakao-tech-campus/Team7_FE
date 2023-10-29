import Image from 'next/image';
import * as Styled from './style';

interface PlusButtonProps {
  title: string;
  onClick?: () => void;
}

const PlusButton = (props: PlusButtonProps) => {
  const { title, onClick } = props;

  return (
    <Styled.PlusButton onClick={onClick}>
      <Image src="/assets/icons/ic_plusButton.svg" alt="plus" width={20} height={20} />
      <span>{title}</span>
    </Styled.PlusButton>
  );
};

export default PlusButton;
