import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import Flex from '@/components/common/Flex';
import * as Styled from './style';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  label?: string;
  textSize?: number;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { checked = true, label, textSize = 0.75, ...rest } = props;

  return (
    <Styled.Label>
      <Flex align="center" justify="center">
        <input ref={ref} type="checkbox" {...rest} />
        <Styled.Checkbox textSize={textSize} checked={checked}>
          {checked && <Styled.CheckboxImage src={`/assets/icons/ic_checkIcon.svg`} fill alt="" />}
        </Styled.Checkbox>
        <Styled.CheckboxText textSize={textSize} align="center">
          {label}
        </Styled.CheckboxText>
      </Flex>
    </Styled.Label>
  );
});

export default Checkbox;
