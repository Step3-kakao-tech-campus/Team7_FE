import Image from 'next/image';
import * as Styled from './style';

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

interface FeatureSectionProps {
  title: string;
  width: number;
  height: number;
}

const FeatureSection = (props: FeatureSectionProps) => {
  const { title, width, height } = props;

  return (
    <Styled.FeatureSection
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.HardWareContainer>
        <Image
          style={{ borderRadius: '10px' }}
          src="/assets/images/roadmap.gif"
          alt="TIL-y"
          width={width}
          height={height}
        />
      </Styled.HardWareContainer>
    </Styled.FeatureSection>
  );
};

export default FeatureSection;
