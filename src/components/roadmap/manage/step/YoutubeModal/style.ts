import styled from '@emotion/styled';

export const YoutubeContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

export const Youtube = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 16px;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
