import { useRecoilState } from 'recoil';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeModal/style';
import { roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import { WEBADDRESS_REGEX } from '@/constants/regex';

interface WebModalProps extends ModalProps {
  idx: number;
}

interface WebFormInput {
  link: string;
}

const WebModal = (props: WebModalProps) => {
  const { idx, isOpen, onClose } = props;
  const [stepList, setStepList] = useRecoilState(roadmapStepAtoms);

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

  const onSubmit: SubmitHandler<WebFormInput> = (formData) => {
    const newStepList = [...stepList];
    const newReferences = { ...stepList[idx].references };
    const newWeb = [...stepList[idx].references.web];
    newWeb.push({ link: formData.link });
    newReferences.web = newWeb;
    newStepList[idx] = { ...newStepList[idx], references: newReferences };

    setStepList(newStepList);
    reset();
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Styled.Root>
        <h2>참고자료 링크 추가하기</h2>

        <InfoArea>
          <InfoArea.Info>해당 스텝에 사용할 참고자료 링크를 첨부해주세요.</InfoArea.Info>
        </InfoArea>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="link"
            control={control}
            rules={{
              required: '필수 정보입니다.',
              pattern: {
                value: WEBADDRESS_REGEX,
                message: '링크를 정확히 입력하셨는지 확인해주세요.',
              },
            }}
            render={({ field }) => (
              <Input
                label="참고자료 링크"
                labelType="bold"
                placeholder="참고자료 링크를 첨부해주세요."
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

export default WebModal;
