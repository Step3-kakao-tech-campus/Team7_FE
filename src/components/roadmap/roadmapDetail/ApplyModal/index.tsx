import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { useGetRoadmapsById, usePostGroupRoadmapsApply, usePostTilyRoadmapsApply } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import type { ModalProps } from '@/components/common/Modal';
import Modal from '@/components/common/Modal';
import TextArea from '@/components/common/TextArea';
import * as Styled from '@/components/roadmap/roadmapDetail/ApplyModal/style';
import useQueryParam from '@/hooks/useQueryParam';

const ApplyModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;

  const { postGroupRoadmapsApplyAsync, isLoading: isGroupApplyLoading } = usePostGroupRoadmapsApply();
  const { postTilyRoadmapsApplyAsync, isLoading: isTilyApplyLoading } = usePostTilyRoadmapsApply();

  const roadmapId = Number(useQueryParam('roadmapId'));

  const { data: roadmapDetailInfo } = useGetRoadmapsById({ roadmapId });
  const category = roadmapDetailInfo?.result.category;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      aboutMe: '',
    },
  });

  const onSubmit: SubmitHandler<{ aboutMe: string }> = async (formData) => {
    const data =
      category === 'tily'
        ? await postTilyRoadmapsApplyAsync({ roadmapId })
        : await postGroupRoadmapsApplyAsync({ roadmapId: roadmapId, body: { content: formData.aboutMe } });

    if (data?.success) {
      onClose();
      reset();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={40}>
      <Styled.Root>
        <h2>신청하기</h2>
        <InfoArea>
          <InfoArea.Info>가볍게 자신을 소개해보세요.</InfoArea.Info>
        </InfoArea>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="aboutMe"
            control={control}
            rules={{ required: '자기소개를 입력해주세요.' }}
            render={({ field }) => (
              <TextArea
                label="자기소개"
                labelType="regular"
                rows={8}
                message={errors.aboutMe?.message}
                status={errors.aboutMe ? 'error' : 'default'}
                {...field}
              />
            )}
          />

          <Styled.ButtonContainer>
            <Button
              variant="ghost"
              type="button"
              onClick={() => {
                onClose();
                reset();
              }}>
              취소
            </Button>
            <Button isLoading={category === 'tily' ? isTilyApplyLoading : isGroupApplyLoading}>신청</Button>
          </Styled.ButtonContainer>
        </form>
      </Styled.Root>
    </Modal>
  );
};

export default ApplyModal;
