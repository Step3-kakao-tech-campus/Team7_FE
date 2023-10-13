import Icon from '@/components/common/Icon';
import TextArea from '@/components/common/TextArea';
import * as Styled from './style';

const TextAreaSection = () => {
  return (
    <Styled.TextAreaContainer>
      <Styled.Container>
        <TextArea rows={3} />
      </Styled.Container>

      <Icon iconName="ic_chatButton" imageSize={38} ext="svg" alt="전송" />
    </Styled.TextAreaContainer>
  );
};

export default TextAreaSection;
