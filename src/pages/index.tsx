import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Avatar from '@/components/common/Avatar';
import Flex from '@/components/common/Flex';
import GNB from '@/components/common/GNB';
import Input from '@/components/common/Input';
import CategorySection from '@/components/main/CategorySection';
import History from '@/components/main/History';
import TILSection from '@/components/main/TILSection';
import { useIntersectionObserver } from '@/hooks/common/useInterSectionObserver';
import { useParamsToUrl } from '@/hooks/common/useParamsToUrl';
import { useGetTils } from '@/hooks/queries/til';
import type { EmotionTheme } from '@/styles/emotion';

const Home = () => {
  const router = useRouter();
  const { tils, isLoading, fetchNextPage, hasNextPage } = useGetTils({ queryKey: [router.query] });
  const { ref, isVisible } = useIntersectionObserver();
  const { getParamsToUrl } = useParamsToUrl();

  useEffect(() => {
    if (isVisible && hasNextPage) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage, hasNextPage]);

  return (
    <>
      <GNB />
      <Root>
        <Inner>
          <LeftArea>
            <Avatar imageWidth={240} imageHeight={240} iconName="ic_profile" />
            <Input
              css={InputContainerStyles}
              inputStyles={InputStyles}
              placeholder="검색어를 입력하세요"
              endIcon="ic_search_2x"
            />
            <CategorySection />
          </LeftArea>

          <RightArea>
            <History getParamsToUrl={getParamsToUrl} />
            <TILSection tils={tils} isLoading={isLoading} />
            <ObserverInterSectionTarget ref={ref} />
          </RightArea>
        </Inner>
      </Root>
    </>
  );
};

export default Home;

const Root = styled.div``;

const Inner = styled(Flex)`
  max-width: 1440px;
  margin: 0 auto;
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};

  padding: 2.5rem;
  height: 100vh;
`;
const InputContainerStyles = (theme: EmotionTheme) => css`
  background-color: ${theme.colors.gray_100};
  border: 0.1rem solid ${theme.colors.gray_100};
  width: 16.875em;
  font-size: 1rem;
  border-radius: 20px;
  padding: 0.75rem 0.8rem;
  margin-top: 2.125rem;
`;

const InputStyles = (theme: EmotionTheme) => css`
  &::placeholder {
    color: ${theme.colors.gray_800};
  }
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 101vh;
  padding: 3.5rem 0 0 4.5rem;
`;

const ObserverInterSectionTarget = styled.div`
  width: 100%;
  height: 40px;
`;
