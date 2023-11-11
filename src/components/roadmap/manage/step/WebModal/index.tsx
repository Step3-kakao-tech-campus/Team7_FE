import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { usePostReferences } from '@/api/hooks/roadmap';
import type { StepWithReferences } from '@/api/type';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import FlexForm from '@/components/common/FlexForm';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import REGEX from '@/constants/regex';
import useQueryParam from '@/hooks/useQueryParam';
import preventEnterSubmit from '@/utils/preventEnterSubmit';

interface WebModalProps extends ModalProps {
  step: StepWithReferences;
}

const WebModal = (props: WebModalProps) => {
  const { step, isOpen, onClose } = props;
  const roadmapId = Number(useQueryParam('roadmapId'));
  const { postReferencesAsync, isLoading } = usePostReferences();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ link: string }>({
    defaultValues: {
      link: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<{ link: string }> = async (formData) => {
    const data = await postReferencesAsync({ body: { category: 'web', roadmapId, stepId: step.id, ...formData } });
    if (data.code === 201) {
      reset();
      onClose();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Flex dir="col" gap={1.5}>
        <h2>참고자료 링크 추가하기</h2>
        <InfoArea>
          <InfoArea.Info>해당 스텝에 사용할 참고자료 링크를 첨부해주세요.</InfoArea.Info>
        </InfoArea>
        <FlexForm onSubmit={handleSubmit(onSubmit)} onKeyDown={preventEnterSubmit}>
          <Controller
            name="link"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              pattern: {
                value: REGEX.webAddress(),
                message: '링크를 정확히 입력하셨는지 확인해주세요.',
              },
            }}
            render={({ field }) => (
              <Input
                label="참고자료 링크"
                labelType="bold"
                placeholder="참고자료 링크를 첨부해주세요."
                message={errors.link?.message}
                status={errors.link && 'error'}
                {...field}
              />
            )}
          />
          <TwoButtonContainer>
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                reset();
                onClose();
              }}>
              취소
            </Button>
            <Button type="submit" isLoading={isLoading}>
              확인
            </Button>
          </TwoButtonContainer>
        </FlexForm>
      </Flex>
    </Modal>
  );
};

export default WebModal;
