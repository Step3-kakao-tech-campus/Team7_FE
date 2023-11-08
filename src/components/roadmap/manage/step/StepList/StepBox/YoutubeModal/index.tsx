import { produce } from 'immer';
import { useSetRecoilState } from 'recoil';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import * as Styled from '@/components/roadmap/manage/step/StepList/StepBox/YoutubeModal/style';

interface YoutubeModalProps extends ModalProps {
  idx: number;
}

interface YoutubeFormInput {
  link: string;
}

const YoutubeModal = (props: YoutubeModalProps) => {
  const { idx, isOpen, onClose } = props;
  // const setRoadmap = useSetRecoilState(roadmapAtoms);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      link: '',
    },
    mode: 'onSubmit',
  });

  // const onSubmit: SubmitHandler<YoutubeFormInput> = (formData) => {
  //   setRoadmap((prev) =>
  //     produce(prev, (draft) => {
  //       draft.steps[idx].references.youtube.push(formData);
  //     }),
  //   );
  //   reset();
  //   onClose();
  // };
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Styled.Root>
        <h2>유튜브 영상 추가하기</h2>

        <InfoArea>
          <InfoArea.Info>해당 스텝에 사용할 동영상 링크를 첨부해주세요.</InfoArea.Info>
        </InfoArea>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="link"
            control={control}
            rules={{
              required: '필수 정보입니다.',
            }}
            render={({ field }) => (
              <Input
                label="동영상 링크"
                labelType="bold"
                placeholder="동영상 링크를 첨부해주세요."
                message={errors.link?.message}
                status={errors.link ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <Styled.ButtonContainer>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                reset();
                onClose();
              }}>
              취소
            </Button>
            <Button type="submit">확인</Button>
          </Styled.ButtonContainer>
        </form> */}
      </Styled.Root>
    </Modal>
  );
};

export default YoutubeModal;
