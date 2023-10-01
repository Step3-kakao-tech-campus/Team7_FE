import type { TextareaHTMLAttributes } from 'react';
import * as Styled from '@/components/common/TextArea/style';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const TextArea = (props: TextAreaProps) => {
  const { label, ...rest } = props;
  return (
    <label>
      {label && <Styled.LabelText>{label}</Styled.LabelText>}
      <Styled.TextArea {...rest} />
    </label>
  );
};

export default TextArea;
