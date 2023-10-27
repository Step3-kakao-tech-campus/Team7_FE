import SliderList from 'react-slick';
import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonContainer = styled.section`
  display: flex;
  gap: 1rem;

  & > button {
    border-color: black;
    border-radius: 1.5rem;
    font-weight: 600;
  }
`;

export const Slider = styled(SliderList)`
  position: relative;

  @media (max-width: 550px) {
    width: 250px;
    margin: 0 auto;
  }

  & > div {
    overflow: hidden;
  }

  & > div > div {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
  }

  & > button:nth-of-type(1) {
    position: absolute;
    top: 100px;
    left: -35px;
    width: 20px;
    height: 40px;
    background-image: url('/assets/icons/ic_chevronLeftBlack.svg');
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 0;
  }

  & > button:nth-of-type(2) {
    position: absolute;
    bottom: 90px;
    right: -30px;
    width: 20px;
    height: 40px;
    background-image: url('/assets/icons/ic_chevronRightBlack.svg');
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 0;
  }
`;

export const RoadmapCodeModal = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RoadmapCodeForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
