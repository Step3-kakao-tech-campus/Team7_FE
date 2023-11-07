import { useState, type PropsWithChildren, useRef } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

interface ListItemProps {
  selected: boolean;
  onClick: () => void;
}

const ListItem = (props: PropsWithChildren<ListItemProps>) => {
  const { children, selected, onClick } = props;
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDeletePopover, setShowDeletePopover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOnClickOutside(ref, () => {
    setShowDeletePopover(false);
  });

  useOnClickOutside(inputRef, () => {
    setShowEdit(false);
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
    },
    mode: 'onSubmit',
  });

  const editTitle: SubmitHandler<{ title: string }> = (formData) => {
    setShowEdit(false);
  };

  return (
    <>
      {showEdit ? (
        <Styled.Form onSubmit={handleSubmit(editTitle)}>
          <Controller
            name="title"
            control={control}
            rules={{
              required: '카테고리명을 입력해주세요.',
              pattern: {
                value: /^(.{1,20})$/,
                message: '글자수는 20자까지 입력가능합니다.',
              },
            }}
            render={({ field }) => (
              <Styled.InputContainer ref={inputRef}>
                <Input
                  css={Styled.InputContainerStyles}
                  inputStyles={Styled.InputStyles}
                  placeholder="변경하실 제목을 입력해주세요."
                  message={errors.title?.message}
                  status={errors.title ? 'error' : 'default'}
                  {...field}
                />
                <Styled.ImageContainer
                  onClick={() => {
                    setShowEdit(false);
                    reset();
                  }}>
                  <Image src="/assets/icons/ic_closeButton.svg" alt="닫기 버튼" width={26} height={26} />
                </Styled.ImageContainer>
              </Styled.InputContainer>
            )}
          />
        </Styled.Form>
      ) : (
        <Styled.Root selected={selected} onClick={onClick}>
          <Styled.Content>{children}</Styled.Content>
          {selected && (
            <Styled.EditContainer>
              <Icon iconName="ic_edit" imageSize={20} ext="svg" alt="STEP 수정하기" onClick={() => setShowEdit(true)} />
              <Icon
                iconName="ic_trash"
                imageSize={20}
                ext="svg"
                alt="STEP 삭제하기"
                onClick={() => setShowDeletePopover(true)}
              />
            </Styled.EditContainer>
          )}

          {showDeletePopover && (
            <Styled.Popover ref={ref}>
              <Button variant="outline" css={Styled.ButtonStyles} onClick={() => setShowDeletePopover(false)}>
                취소
              </Button>
              <Button css={Styled.ButtonStyles}>삭제</Button>
            </Styled.Popover>
          )}
        </Styled.Root>
      )}
    </>
  );
};

export default ListItem;
