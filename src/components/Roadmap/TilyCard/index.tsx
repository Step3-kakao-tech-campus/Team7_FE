import Image from 'next/image';
import * as Style from '@/components/Roadmap/TilyCard/style';
import Logo from '@/components/common/Logo';

const TilyCard = () => {
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
        <h5>JAVA 입문 수업 - 생활 코딩</h5>
      </section>

      <p>81개 STEP</p>
    </Style.Root>
  );
};

export default TilyCard;
