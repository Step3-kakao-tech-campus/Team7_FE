import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { usePostRoadmapsGroupsParticipate } from '@/api/hooks/roadmap';
import * as Style from '@/components/Roadmap/MyRoadmap/style';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import { useModalState } from '@/hooks/useModalState';

const MyRoadmap = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  const { postRoadmapsGroupsParticipate, isLoading } = usePostRoadmapsGroupsParticipate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { code: '' }, mode: 'onSubmit' });

  const onSubmit: SubmitHandler<{ code: string }> = async (formData) => {
    const data = await postRoadmapsGroupsParticipate(formData.code);

    if (data.success) handleClose();
  };

  return (
    <>
      <Style.Header>
        <h2>참여중인 로드맵</h2>
        <Style.ButtonContainer>
          <Button
            variant="outline"
            onClick={() => {
              handleOpen();
              reset();
            }}>
            코드로 참여하기
          </Button>
          <Button variant="outline">그룹 생성</Button>
        </Style.ButtonContainer>
      </Style.Header>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <Style.RoadmapCodeModal>
          <h3>로드맵에 참여해보세요.</h3>
          <Style.RoadmapCodeForm onSubmit={handleSubmit(onSubmit)}>
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
          </Style.RoadmapCodeForm>
        </Style.RoadmapCodeModal>
      </Modal>
    </>
  );
};

export default MyRoadmap;
