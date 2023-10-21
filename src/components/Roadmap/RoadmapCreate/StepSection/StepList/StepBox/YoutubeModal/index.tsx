import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeModal/style';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';

interface YoutubeModalProps extends ModalProps {
  idx: number;
  addYoutube: (idx: number, link: string) => void;
}

interface YoutubeFormInput {
  link: string;
}

const YoutubeModal = (props: YoutubeModalProps) => {
  const { idx, addYoutube, isOpen, onClose } = props;

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

  const onSubmit: SubmitHandler<YoutubeFormInput> = (formData) => {
    addYoutube(idx, formData.link);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Styled.Root>
        <h2>유튜브 영상 추가하기</h2>

        <InfoArea>
          <InfoArea.Info>해당 스텝에 사용할 동영상 링크를 첨부해주세요.</InfoArea.Info>
        </InfoArea>
        <form onSubmit={handleSubmit(onSubmit)}>
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
        </form>
      </Styled.Root>
    </Modal>
  );
};

export default YoutubeModal;
