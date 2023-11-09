import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { usePostRoadmapsGroupsParticipate } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import * as Styled from '@/components/roadmap/roadmapList/RoadmapCodeModal/style';

const RoadmapCodeModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const { postRoadmapsGroupsParticipateAsync, isLoading } = usePostRoadmapsGroupsParticipate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { code: '' }, mode: 'onSubmit' });

  const onSubmit: SubmitHandler<{ code: string }> = async (formData) => {
    const data = await postRoadmapsGroupsParticipateAsync({ body: { code: formData.code } });

    if (data.success) {
      onClose?.();
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Styled.RoadmapCodeModal>
        <h3>로드맵에 참여해보세요.</h3>
        <Styled.RoadmapCodeForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="code"
            control={control}
            rules={{ required: '코드를 입력해주세요.' }}
            render={({ field }) => (
              <Input
                placeholder="코드를 입력해주세요."
                message={errors.code?.message}
                status={errors.code ? 'error' : 'default'}
                {...field}
              />
            )}
          />
          <Button isLoading={isLoading}>참여하기</Button>
        </Styled.RoadmapCodeForm>
      </Styled.RoadmapCodeModal>
    </Modal>
  );
};

export default RoadmapCodeModal;
