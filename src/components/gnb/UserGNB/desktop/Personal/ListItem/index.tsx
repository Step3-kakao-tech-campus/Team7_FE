import { useState, type PropsWithChildren, useRef, type SetStateAction, type Dispatch } from 'react';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import { useDeleteRoadmaps, useDeleteSteps, usePatchRoadmaps, usePatchSteps } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';
import Input from '@/components/common/Input';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import * as Styled from './style';

interface ListItemProps {
  stepId?: number;
  roadmapId: number;
  selected: boolean;
  onClick: () => void;
  onClickRoadmap?: Dispatch<SetStateAction<number>>;
}

const ListItem = (props: PropsWithChildren<ListItemProps>) => {
  const { children, selected, stepId, roadmapId, onClick, onClickRoadmap } = props;
  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showDeletePopover, setShowDeletePopover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { deleteStepsAsync } = useDeleteSteps(roadmapId);
  const { patchStepsAsync } = usePatchSteps(roadmapId);
  const { deleteRoadmapsAsync } = useDeleteRoadmaps();
  const { patchRoadmapsAsync } = usePatchRoadmaps();

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
    if (stepId !== undefined)
      patchStepsAsync({ stepId, body: { title: formData.title, description: null, dueDate: null } });
    else
      patchRoadmapsAsync({
        roadmapId,
        body: { name: formData.title, description: null, isPublic: false, isRecruit: false },
      });
  };

  const handleDelete = async () => {
    if (stepId !== undefined) await deleteStepsAsync({ stepId });
    else {
      const data = await deleteRoadmapsAsync({ roadmapId });
      if (data.code === 200) {
        onClickRoadmap?.(0);
      }
    }
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
                  type="button"
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
              <Button css={Styled.ButtonStyles} onClick={handleDelete}>
                삭제
              </Button>
            </Styled.Popover>
          )}
        </Styled.Root>
      )}
    </>
  );
};

export default ListItem;
