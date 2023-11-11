import axios from 'axios';
import { useEffect, useState } from 'react';
import type { OpenGraphScraperResult } from '@/pages/api/open-graph';
import * as Styled from './style';

interface OpenGraphProps {
  url: string;
}

const OpenGraph = (props: OpenGraphProps) => {
  const { url } = props;

  const [data, setData] = useState<OpenGraphScraperResult>();

  useEffect(() => {
    async function run() {
      const { data }: any = await axios
        .post('/api/open-graph', { url })
        .then((res) => res)
        .catch((err) => console.log(err));

      setData(data);
    }

    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return <></>;

  return (
    <Styled.Root
      href={data?.ogUrl}
      target="_blank" // 새탭 열기
      rel="noreferrer" // 세션 정보 새로열린 탭에 공유되지 않도록
    >
      <Styled.Wrapper>
        <Styled.Container>
          <Styled.Title>{data?.ogTitle}</Styled.Title>
          <Styled.Desc>{data?.ogDescription}</Styled.Desc>
        </Styled.Container>
        {data?.ogImage ? <Styled.Image src={data?.ogImage[0].url} alt="참고자료 이미지" /> : null}
      </Styled.Wrapper>
    </Styled.Root>
  );
};

export default OpenGraph;
