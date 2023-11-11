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
import * as Styled from './style';

interface YoutubeModalProps extends ModalProps {
  step: StepWithReferences;
}

const YoutubeModal = (props: YoutubeModalProps) => {
  const { step, isOpen, onClose } = props;
  const roadmapId = Number(useQueryParam('roadmapId'));
  const { postReferencesAsync, isLoading } = usePostReferences();

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

  const onSubmit: SubmitHandler<{ link: string }> = async (formData) => {
    const data = await postReferencesAsync({ body: { category: 'youtube', roadmapId, stepId: step.id, ...formData } });
    if (data.code === 201) {
      reset();
      onClose();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={50}>
      <Flex dir="col" gap={1.5}>
        <h2>유튜브 영상 추가하기</h2>
        <InfoArea>
          <InfoArea.Info>해당 스텝에 사용할 동영상 링크를 첨부해주세요.</InfoArea.Info>
          <Styled.YoutubeContainer>
            <Styled.Youtube>
              <iframe
                width="600"
                height="400"
                src="https://www.youtube.com/embed/1T8fyDzgfT4?si=GFNmcV3Sw3LttNwZ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            </Styled.Youtube>
          </Styled.YoutubeContainer>
        </InfoArea>
        <FlexForm onSubmit={handleSubmit(onSubmit)} onKeyDown={preventEnterSubmit}>
          <Controller
            name="link"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              pattern: {
                value: REGEX.yotubueAddress(),
                message: '형식에 맞는 동영상 링크를 입력해주세요.',
              },
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

export default YoutubeModal;
