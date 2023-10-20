import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import HeaderLayout from '@/components/layout/HeaderLayout';
import { tilyLinks } from '@/constants/links';
import { setLayout } from '@/utils/layout';

const Roadmap = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => {
        router.push(tilyLinks.roadmapCreate());
      }}>
      로드맵 생성하기
    </Button>
  );
};

setLayout(Roadmap, HeaderLayout);

export default Roadmap;
