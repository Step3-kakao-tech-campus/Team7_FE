import React, { forwardRef } from 'react';
import * as Styled from './style';

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultChecked?: boolean;
  label?: string;
  textPosition?: 'left' | 'right';
  textSize?: number;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const {
    className,
    defaultChecked = false,
    checked = false,
    textPosition = 'left',
    label = '',
    textSize = 1,
    ...rest
  } = props;

  const RadioIcon = checked ? Styled.ActiveRadio : Styled.EmptyRadio;
  const radioIconSrc = checked ? `/assets/icons/ic_activeRadio.svg` : `/assets/icons/ic_emptyRadio.svg`;

  return (
    <Styled.Label className={className}>
      {label && textPosition === 'left' && (
        <Styled.RadioButtonText textPosition={textPosition} textSize={textSize}>
          {label}
        </Styled.RadioButtonText>
      )}

      <input ref={ref} type="radio" defaultChecked={defaultChecked} checked={checked} {...rest} />
      <Styled.Container textSize={textSize}>
        <RadioIcon src={radioIconSrc} alt="" fill />
      </Styled.Container>

      {label && textPosition === 'right' && (
        <Styled.RadioButtonText textPosition={textPosition} textSize={textSize}>
          {label}
        </Styled.RadioButtonText>
      )}
    </Styled.Label>
  );
});

export default RadioButton;
