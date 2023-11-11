import { useRouter } from 'next/router';
import { type Roadmap } from '@/api/type';
import Logo from '@/components/common/Logo';
import * as Style from '@/components/roadmap/roadmapList/TilyCard/style';
import TILY_LINK from '@/constants/links';

interface TilyCardProps {
  roadmap: Roadmap;
}

const TilyCard = (props: TilyCardProps) => {
  const { roadmap } = props;
  const router = useRouter();

  return (
    <Style.Root
      onClick={() => {
        router.push(TILY_LINK.roadmapDetail(roadmap.id));
      }}>
      <section>
        <Style.Container>
          <Logo type="logo" imageSize={25} />
        </Style.Container>
        <img
          src={roadmap.image}
          width={500}
          height={250}
          style={{ width: '100%', height: '100%' }}
          alt={'틸리 로드맵 이미지'}
        />
        <Style.Container>
          <h3>{roadmap.name}</h3>
        </Style.Container>
      </section>

      <Style.Container>
        <p>{roadmap.stepNum}개 STEP</p>
      </Style.Container>
    </Style.Root>
  );
};

export default TilyCard;
