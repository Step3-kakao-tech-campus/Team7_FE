import Avatar from '@/components/common/Avatar';
import GNB from '@/components/common/GNB';
import Input from '@/components/common/Input';
import * as Styled from './style';

const Home = () => {
  return (
    <>
      <GNB />
      <Styled.Root>
        <Styled.Inner>
          <Styled.LeftArea>
            <Avatar imageWidth={240} imageHeight={240} iconName="ic_profile" />
            <Input
              css={Styled.InputContainerStyles}
              inputStyles={Styled.InputStyles}
              placeholder="검색어를 입력하세요"
              endIcon="ic_search_2x"
            />
          </Styled.LeftArea>

          <Styled.RightArea>hihi</Styled.RightArea>
        </Styled.Inner>
      </Styled.Root>
    </>
  );
};

export default Home;
