import { useGetUsers } from '@/api/hooks/user';
import Responsive from '@/components/common/Responsive';
import ImageUploader from '@/components/mypage/ProfileSection/ImageUploader';
import * as Styled from './style';

const ProfileSection = () => {
  const { user } = useGetUsers();

  return (
    <Styled.Root>
      <Responsive device="desktop">
        <ImageUploader imageUrl={user?.image} imgSize={160} />
      </Responsive>

      <Responsive device="mobile">
        <ImageUploader imageUrl={user?.image} imgSize={100} />
      </Responsive>

      <Styled.UserInfo>
        <Styled.Name>{user?.name}</Styled.Name>
        <Styled.Honorific>님</Styled.Honorific>
      </Styled.UserInfo>
    </Styled.Root>
  );
};

export default ProfileSection;
