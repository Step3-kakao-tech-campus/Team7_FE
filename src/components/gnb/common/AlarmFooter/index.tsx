import Image from 'next/image';
import { useRouter } from 'next/router';
import * as Styled from '@/components/gnb/common/AlarmFooter/style';
import TILY_LINKS from '@/constants/links';
import useAuth from '@/hooks/useAuth';

const AlarmFooter = () => {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <Styled.Footer>
      <button onClick={() => router.push(TILY_LINKS.mypage())}>
        <Image src="/assets/icons/ic_smile.svg" width={20} height={20} alt="마이페이지 버튼 아이콘" />
        <span>마이페이지</span>
      </button>

      <button onClick={() => logout()}>
        <Image src="/assets/icons/ic_unlock.svg" width={20} height={20} alt="마이페이지 버튼 아이콘" />
        <span>로그아웃</span>
      </button>
    </Styled.Footer>
  );
};

export default AlarmFooter;
