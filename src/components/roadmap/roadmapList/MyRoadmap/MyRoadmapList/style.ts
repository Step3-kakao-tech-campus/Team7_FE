import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import SliderList from 'react-slick';
import styled from '@emotion/styled';
import Flex from '@/components/common/Flex';
import SkeletonBox from '@/components/common/Skeleton';

export const Slider = styled(SliderList)`
  margin-bottom: 20px;

  & .slick-track {
    height: 270px;

    @media ${({ theme }) => theme.mediaQuery.sm} {
      -webkit-line-clamp: 2;
      height: 250px;
    }
  }

  & .slick-arrow {
    top: 52%;
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;

    &::before {
      content: '';
    }
  }

  & .slick-prev {
    left: -35px;
    background-image: url('/assets/icons/ic_prev.svg');
  }

  & .slick-next {
    right: -35px;
    background-image: url('/assets/icons/ic_next.svg');
  }

  & .slick-dots {
    bottom: -15px;
  }

  & .slick-dots > li {
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.colors.gray_500};

    & > button::before {
      content: '';
    }

    &.slick-active {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const SkeletonRoot = styled(Flex)`
  display: flex;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    margin-bottom: 50px;
  }
`;
export const Skeleton = styled(SkeletonBox)`
  width: 100%;
  height: 230px;
  margin: 20px 0 0 10px;

  @media ${({ theme }) => theme.mediaQuery.sm} {
    height: 200px;
  }
`;
