import type { TextareaHTMLAttributes } from 'react';
import * as Styled from '@/components/common/TextArea/style';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelType?: 'bold' | 'regular';
}

const TextArea = (props: TextAreaProps) => {
  const { label, labelType, ...rest } = props;
  return (
    <label>
      {label && <Styled.LabelText labelType={labelType}>{label}</Styled.LabelText>}
      <Styled.TextArea {...rest} />
    </label>
  );
};

export default TextArea;
