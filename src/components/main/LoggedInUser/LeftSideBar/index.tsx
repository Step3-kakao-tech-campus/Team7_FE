import { forwardRef } from 'react';
import { memo } from 'react';
import { useGetUsers } from '@/api/hooks/user';
import Avatar from '@/components/common/Avatar';
import CustomSuspense from '@/components/common/CustomSuspense';
import Skeleton from '@/components/common/Skeleton';
import CategorySection from '@/components/main/LoggedInUser/LeftSideBar/CategorySection';
import SearchBar from '@/components/main/LoggedInUser/LeftSideBar/SearchBar';
import * as Styled from './style';

interface LeftSideBarProps {}

const LeftSideBar = forwardRef<HTMLFormElement, LeftSideBarProps>((_, onBoardRef) => {
  const { user, isLoading } = useGetUsers();

  return (
    <Styled.LeftArea>
      <CustomSuspense isLoading={isLoading} fallback={<Skeleton type="circle" css={Styled.ProfileSkeletonStyles} />}>
        <Avatar imageUrl={user?.image} imageSize={240} alt="프로필 이미지" />
      </CustomSuspense>
      <SearchBar ref={onBoardRef} />
      <CategorySection />
    </Styled.LeftArea>
  );
});

export default memo(LeftSideBar);
