import { produce } from 'immer';
import { useSetRecoilState } from 'recoil';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import Button from '@/components/common/Button';
import InfoArea from '@/components/common/InfoArea';
import Input from '@/components/common/Input';
import Modal, { type ModalProps } from '@/components/common/Modal';
import * as Styled from '@/components/roadmap/manage/step/StepList/StepBox/YoutubeModal/style';
import REGEX from '@/constants/regex';

interface WebModalProps extends ModalProps {
  idx: number;
}

interface WebFormInput {
  link: string;
}

const WebModal = (props: WebModalProps) => {
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

  // const onSubmit: SubmitHandler<WebFormInput> = (formData) => {
  //   setRoadmap((prev) =>
  //     produce(prev, (draft) => {
  //       draft.steps[idx].references.web.push(formData);
  //     }),
  //   );
  //   reset();
  //   onClose();
  // };
  return (
    <Modal isOpen={isOpen} onClose={onClose} width={35}>
      <Styled.Root>
        <h2>참고자료 링크 추가하기</h2>

        <InfoArea>
          <InfoArea.Info>해당 스텝에 사용할 참고자료 링크를 첨부해주세요.</InfoArea.Info>
        </InfoArea>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
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

export default WebModal;
