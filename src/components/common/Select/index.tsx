import { useState, type PropsWithChildren, useRef } from 'react';
import Image from 'next/image';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  className?: string;
  selectedOption?: SelectOption;
  imageSize?: number;
  options: SelectOption[];
  onChangeOption?: (option: SelectOption) => void;
  callbackFunction?: (option: SelectOption) => void;
}

const Select = (props: SelectProps) => {
  const { className, options, selectedOption, imageSize = 14, callbackFunction, onChangeOption } = props;

  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  useOnClickOutside(containerRef, () => {
    setOpen(false);
  });

  const handleClickOption = (option: SelectOption) => {
    toggleOpen();
    onChangeOption?.(option);
    callbackFunction?.(option);
  };

  return (
    <Styled.SelectContainer className={className} ref={containerRef}>
      <Styled.Select
        onClick={toggleOpen}
        isOpen={isOpen}
        rotate={isOpen}
        imageSize={imageSize}
        iconName="ic_chevronDown"
        iconPosition="right">
        {selectedOption?.label}
      </Styled.Select>
      <Styled.SelectMenu isOpen={isOpen}>
        {options.map((option) => {
          return (
            <SelectOption
              isChecked={option.value === selectedOption?.value}
              key={option.value}
              imageSize={imageSize}
              onClick={() => handleClickOption(option)}>
              {option.label}
            </SelectOption>
          );
        })}
      </Styled.SelectMenu>
    </Styled.SelectContainer>
  );
};

export default Select;

interface SelectOptionProps extends React.HTMLAttributes<HTMLButtonElement> {
  isChecked?: boolean;
  imageSize?: number;
}

const SelectOption = (props: PropsWithChildren<SelectOptionProps>) => {
  const { children, isChecked = false, imageSize = 14, ...rest } = props;

  return (
    <Styled.SelectOption {...rest}>
      {children}
      {isChecked && <Image src={`/assets/icons/ic_check.svg`} alt="icon" width={imageSize} height={imageSize} />}
    </Styled.SelectOption>
  );
};
