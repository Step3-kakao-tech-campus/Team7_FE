import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { usePostGroupApply } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import FlexForm from '@/components/common/FlexForm';
import InfoArea from '@/components/common/InfoArea';
import type { ModalProps } from '@/components/common/Modal';
import Modal from '@/components/common/Modal';
import TextArea from '@/components/common/TextArea';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import useQueryParam from '@/hooks/useQueryParam';

const ApplyModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const roadmapId = Number(useQueryParam('roadmapId'));

  const { postGroupApplyAsync, isLoading } = usePostGroupApply();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: '',
    },
  });

  const onSubmit: SubmitHandler<{ content: string }> = async (formData) => {
    const data = await postGroupApplyAsync({ roadmapId: roadmapId, body: { content: formData.content } });

    if (data?.code === 200) {
      onClose();
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={40}>
      <Flex dir="col" gap={1.5}>
        <h2>신청하기</h2>
        <InfoArea>
          <InfoArea.Info>가볍게 자신을 소개해보세요.</InfoArea.Info>
        </InfoArea>
        <FlexForm onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="content"
            control={control}
            rules={{ required: '자기소개를 입력해주세요.' }}
            render={({ field }) => (
              <TextArea
                label="자기소개"
                labelType="regular"
                rows={8}
                message={errors.content?.message}
                status={errors.content ? 'error' : 'default'}
                {...field}
              />
            )}
          />

          <TwoButtonContainer>
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}>
              취소
            </Button>
            <Button isLoading={isLoading}>신청</Button>
          </TwoButtonContainer>
        </FlexForm>
      </Flex>
    </Modal>
  );
};

export default ApplyModal;
