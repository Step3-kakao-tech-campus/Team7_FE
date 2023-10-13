import Docs from '@/components/TILWrite/Reference/Docs';
import Header from '@/components/TILWrite/Reference/Header';
import Youtube from '@/components/TILWrite/Reference/Youtube';
import * as Styled from './style';

interface ReferenceProps {
  handleCloseReferenceAside: () => void;
}
const Reference = (props: ReferenceProps) => {
  const { handleCloseReferenceAside } = props;

  return (
    <Styled.Root>
      <Header handleCloseReferenceAside={handleCloseReferenceAside} />

      <Styled.Reference>참고 자료</Styled.Reference>

      <Youtube />

      <Docs />
    </Styled.Root>
  );
};

export default Reference;
