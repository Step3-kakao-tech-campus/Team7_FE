import Image from 'next/image';
import type { Tily } from '@/api/type';
import * as Style from '@/components/Roadmap/RoadmapList/TilyCard/style';
import Logo from '@/components/common/Logo';

interface TilyCardProps {
  roadmap: Tily;
}

const TilyCard = (props: TilyCardProps) => {
  const { roadmap } = props;
  return (
    <Style.Root>
      <section>
        <Logo type="logo" imageSize={25} />
        <Image
          src={'https://ppss.kr/wp-content/uploads/2022/10/1-6.jpg'}
          width={500}
          height={250}
          style={{ width: '100%', height: 'auto' }}
          alt={'roadmapImg'}
        />
        <h5>{roadmap.name}</h5>
      </section>

      <p>{roadmap.stepNum}개 STEP</p>
    </Style.Root>
  );
};

export default TilyCard;
