import * as Styled from './style';

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

interface FeatureSectionProps {
  title: string;
  videoSrc: string;
  alt: string;
}

const FeatureSection = (props: FeatureSectionProps) => {
  const { title, videoSrc, alt } = props;

  return (
    <Styled.FeatureSection
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={FADE_DOWN_ANIMATION_VARIANTS}>
      <Styled.SectionTitle>{title}</Styled.SectionTitle>
      <Styled.HardWareContainer>
        <video autoPlay loop muted>
          <source src={`assets/images/${videoSrc}.mp4`} type="video/mp4" />
          {alt}
        </video>
      </Styled.HardWareContainer>
    </Styled.FeatureSection>
  );
};

export default FeatureSection;
