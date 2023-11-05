import * as Styled from './style';

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

interface FeatureSectionProps {
  title: string;
  imgsrc: string;
  alt: string;
}

const FeatureSection = (props: FeatureSectionProps) => {
  const { title, imgsrc, alt } = props;

  return (
    <Styled.FeatureSection
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.HardWareContainer>
        <Styled.Image src={imgsrc} alt={alt} />
      </Styled.HardWareContainer>
    </Styled.FeatureSection>
  );
};

export default FeatureSection;
