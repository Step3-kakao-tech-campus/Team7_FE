import * as Style from '@/components/Roadmap/GroupCard/style';
import { Avatar } from '@/components/common/Avatar/style';

const GroupCard = () => {
  return (
    <Style.Root>
      <h5>JAVA 입문 수업 - 생활 코딩</h5>
      <section>
        <p>81개 STEP</p>
        <section>
          <span>조준서</span>
          <Avatar src={'https://avatars.githubusercontent.com/u/83194164?v=4'} width={30} height={30} alt="내얼굴" />
        </section>
      </section>
    </Style.Root>
  );
};

export default GroupCard;
