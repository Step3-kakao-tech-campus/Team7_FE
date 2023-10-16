import { useState, type PropsWithChildren, useRef } from 'react';
import Image from 'next/image';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

export interface SelectOption {
  value: string | null;
  label: string;
}

export interface SelectProps {
  className?: string;
  selectedOption?: SelectOption;
  onChangeOption?: (option: SelectOption) => void;
  options: SelectOption[];
}

const Select = (props: SelectProps) => {
  const { className, onChangeOption, options, selectedOption } = props;

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
  };

  return (
    <Styled.SelectContainer className={className} ref={containerRef}>
      <Styled.Select onClick={toggleOpen} isOpen={isOpen} imageSize={14} iconName="ic_chevronDown" iconPosition="right">
        {selectedOption?.label}
      </Styled.Select>
      <Styled.SelectMenu isOpen={isOpen}>
        {options.map((option) => {
          return (
            <SelectOption
              isChecked={option.value === selectedOption?.value}
              key={option.value}
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
}

const SelectOption = (props: PropsWithChildren<SelectOptionProps>) => {
  const { children, isChecked = false, ...rest } = props;

  return (
    <Styled.SelectOption {...rest}>
      {children}
      {isChecked && <Image src={`/assets/icons/ic_check.svg`} alt="icon" width={14} height={14} />}
    </Styled.SelectOption>
  );
};
