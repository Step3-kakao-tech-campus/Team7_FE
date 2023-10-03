import type { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { css } from '@emotion/react';
import type { CalendarTooltipProps } from '@nivo/calendar';
import Avatar from '@/components/common/Avatar';
import Card from '@/components/common/Card';
import GNB from '@/components/common/GNB';
import Input from '@/components/common/Input';
import Collapsible from '@/components/main/Collapsible';
import type { EmotionTheme } from '@/styles/emotion';
import * as Styled from './style';

const Calendar = dynamic(() => import('@nivo/calendar').then((m) => m.Calendar), { ssr: false });

const data = [
  {
    day: '2023-10-02', // format must be YYYY-MM-DD
    value: 1,
  },
];

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

            <Styled.CategoryTitle>TIL 목록</Styled.CategoryTitle>

            <Styled.ShowAllButton>목록 전체보기</Styled.ShowAllButton>

            <Styled.CollapsibleContainer>
              <Collapsible>
                <Collapsible.Header>개인 TIL</Collapsible.Header>
                <Collapsible.Item>
                  <div>- 자바 로드맵</div>
                  <div>- 리액트 로드맵</div>
                  <div>- JavaScript 입문 로드맵</div>
                </Collapsible.Item>
              </Collapsible>
              <Collapsible>
                <Collapsible.Header>로드맵 TIL</Collapsible.Header>
                <Collapsible.Item>
                  <div>- 자바 로드맵</div>
                  <div>- 리액트 로드맵</div>
                  <div>- JavaScript 입문 로드맵</div>
                  <div>- 자바 로드맵</div>
                  <div>- 리액트 로드맵</div>
                  <div>- JavaScript 입문 로드맵</div>
                </Collapsible.Item>
              </Collapsible>
            </Styled.CollapsibleContainer>
          </Styled.LeftArea>

          <Styled.RightArea>
            <Styled.HistoryTitle>
              <span>홍박사</span>
              <span>님의 학습 히스토리</span>
            </Styled.HistoryTitle>
            <Styled.CalendarContainer>
              <Calendar
                data={data}
                from="2023-01-01"
                to="2023-12-31"
                align="top"
                width={1000}
                height={200}
                emptyColor="#eeeeee"
                colors={['#EF4365']}
                margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                yearSpacing={45}
                yearLegendOffset={12}
                monthBorderColor="#ffffff"
                dayBorderWidth={2}
                dayBorderColor="#ffffff"
                tooltip={CustomTooltip}
                legends={[
                  {
                    anchor: 'bottom-right',
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,
                    itemDirection: 'right-to-left',
                  },
                ]}
              />
            </Styled.CalendarContainer>

            <div
              css={css`
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 2rem;
                margin-left: 2.6rem;
                margin-top: 1.5rem;
              `}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 8].map((item, index) => {
                return (
                  <Card key={index} css={Styled.CardStyles}>
                    <div
                      css={(theme: EmotionTheme) => css`
                        background-color: ${theme.colors.black};
                        color: ${theme.colors.white};
                        font-size: 0.75rem;
                        padding: 0.5rem;
                        width: fit-content;
                        border-radius: 6px;
                      `}>
                      Next JS 입문
                    </div>
                    <div
                      css={(theme: EmotionTheme) => css`
                        font-size: 1rem;
                        margin-top: 0.5rem;
                        font-weight: 600;
                        width: fit-content;
                        border-radius: 6px;
                        line-height: 1.4rem;
                      `}>
                      CSS - Flexbox : 레이아웃을 마음대로!
                    </div>
                    <div
                      css={(theme: EmotionTheme) => css`
                        font-size: 0.75rem;
                        color: ${theme.colors.gray_900};
                        margin-top: 0.5rem;
                      `}>
                      2023-08-28
                    </div>
                  </Card>
                );
              })}
            </div>
          </Styled.RightArea>
        </Styled.Inner>
      </Styled.Root>
    </>
  );
};

export default Home;

const CustomTooltip = ({ day }: CalendarTooltipProps) => {
  return <Tooltip>{day}</Tooltip>;
};

const Tooltip = ({ children }: PropsWithChildren) => {
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        padding: 6px 12px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 6px;
        background: #181818;
        color: #ffffff;
        box-shadow:
          0px 2px 4px -2px rgba(16, 24, 40, 0.1),
          0px 4px 6px -1px rgba(0, 0, 0, 0.1);
      `}>
      <div
        css={css`
          position: absolute;
          top: calc(100% - 6px);
          background: #181818;
          width: 12px;
          height: 12px;
          transform: rotate(45deg);
        `}
      />
      {children}
    </div>
  );
};
