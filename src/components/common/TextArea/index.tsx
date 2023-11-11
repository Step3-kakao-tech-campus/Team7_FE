import { motion } from 'framer-motion';
import { forwardRef, type LegacyRef, type TextareaHTMLAttributes } from 'react';
import * as Styled from '@/components/common/TextArea/style';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelType?: 'bold' | 'regular' | 'none';
  status?: 'error' | 'default';
  message?: string;
}

const TextArea = forwardRef((props: TextAreaProps, ref: LegacyRef<HTMLTextAreaElement>) => {
  const { label, labelType, status = 'default', message, ...rest } = props;
  return (
    <label>
      {label && <Styled.LabelText labelType={labelType}>{label}</Styled.LabelText>}
      <Styled.TextArea status={status} ref={ref} {...rest} />
      {status === 'error' && message && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ ease: 'easeOut', duration: 0.2 }}>
          <Styled.Message>{message}</Styled.Message>
        </motion.div>
      )}
    </label>
  );
});

export default TextArea;
