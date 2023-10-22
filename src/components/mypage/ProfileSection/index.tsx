import { useGetUser } from '@/api/hooks/user';
import ImageUploader from '@/components/mypage/ProfileSection/ImageUploader';
import * as Styled from './style';

const ProfileSection = () => {
  const { user } = useGetUser();

  return (
    <Styled.Root>
      <ImageUploader />
      <Styled.UserInfo>
        <Styled.Name>{user?.name}</Styled.Name>
        <Styled.Honorific>님</Styled.Honorific>
      </Styled.UserInfo>
    </Styled.Root>
  );
};

export default ProfileSection;
