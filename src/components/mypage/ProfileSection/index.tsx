import ImageUploader from '@/components/mypage/ProfileSection/ImageUploader';
import * as Styled from './style';

const ProfileSection = () => {
  return (
    <Styled.Root>
      <ImageUploader />
      <Styled.UserInfo>
        <Styled.Name>김코딩</Styled.Name>
        <Styled.Honorific>님</Styled.Honorific>
      </Styled.UserInfo>
    </Styled.Root>
  );
};

export default ProfileSection;
