import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import TILY_LINKS from '@/constants/links';

const SocialLogin = () => {
  const router = useRouter();
  return (
    <>
      <Header>또는</Header>
      <Container
        onClick={() => {
          router.push(TILY_LINKS.kakaoLogin());
        }}>
        <Image src="/assets/icons/kakao_login.svg" width={20} height={20} alt="카카오 로그인" />
        <span>카카오로 계속하기</span>
      </Container>
    </>
  );
};

export default SocialLogin;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 20px 0 10px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray_900};
  font-weight: 600;

  &::before {
    content: '';
    flex-grow: 1;
    height: 1px;
    margin-right: 14px;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 0px;
    line-height: 0px;
  }

  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    margin-left: 14px;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 0px;
    line-height: 0px;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 42px;
  min-height: 42px;
  margin-top: 20px;
  border-radius: 6px;
  background-color: #fee500;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.85);
  & > img {
    position: absolute;
    left: 15px;
  }
`;
