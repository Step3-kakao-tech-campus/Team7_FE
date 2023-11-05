import Link from 'next/link';
import * as Styled from './style';

const Footer = () => {
  return (
    <Styled.Footer>
      <Styled.Inner>
        <span>Built by Team TILy. The source code is available on </span>
        <Link href="https://github.com/Step3-kakao-tech-campus/Team7_FE">Github</Link>
      </Styled.Inner>
    </Styled.Footer>
  );
};

export default Footer;
