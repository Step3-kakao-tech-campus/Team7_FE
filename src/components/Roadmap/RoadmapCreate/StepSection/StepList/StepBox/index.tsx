import dayjs from 'dayjs';
import { useState } from 'react';
import Image from 'next/image';
import WebBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/WebBox';
import YoutubeBox from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/YoutubeBox';
import * as Styled from '@/components/Roadmap/RoadmapCreate/StepSection/StepList/StepBox/style';
import StepModal from '@/components/Roadmap/RoadmapCreate/StepSection/StepModal';
import type { Step } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';
import { useModalState } from '@/hooks/useModalState';
import StepDeleteModal from '../../StepDeleteModal';

interface StepBoxProps {
  step: Step;
  idx: number;
}

const StepBox = (props: StepBoxProps) => {
  const { step, idx } = props;

  // STEP 수정하기 Modal
  const { isOpen: isEditOpen, handleOpen: handleEditOpen, handleClose: handleEditClose } = useModalState();
  // STEP 삭제하기 Modal
  const { isOpen: isDeleteOpen, handleOpen: handleDeleteOpen, handleClose: handleDeleteClose } = useModalState();

  const [isOpen, setIsOpen] = useState<boolean>(idx === 0);

  return (
    <>
      <Styled.StepContainer>
        <Styled.Header>
          <Styled.TitleContainer>
            <Image
              src={`/assets/icons/ic_chevron${isOpen ? 'Up' : 'Down'}Black.svg`}
              alt={`${isOpen ? '위' : '아래'} 화살표`}
              width={15}
              height={15}
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
            <h3>{step.title}</h3>
          </Styled.TitleContainer>
          <Styled.ButtonContainer>
            {step.dueDate && (
              <>
                <b>제출기한</b>
                <p>{dayjs(step.dueDate).format('YYYY-MM-DD | HH:mm')}</p>
              </>
            )}

            <Image
              src="/assets/icons/ic_edit.svg"
              alt="STEP 수정하기"
              title="수정하기"
              onClick={handleEditOpen}
              width={25}
              height={25}
            />
            <Image
              src="/assets/icons/ic_trash.svg"
              alt="STEP 삭제하기"
              title="삭제하기"
              onClick={handleDeleteOpen}
              width={25}
              height={25}
            />
          </Styled.ButtonContainer>
        </Styled.Header>
        {isOpen && (
          <Styled.ContentContainer>
            <p>{step.description}</p>
            <YoutubeBox idx={idx} />
            <WebBox idx={idx} />
          </Styled.ContentContainer>
        )}
      </Styled.StepContainer>
      <StepModal type="edit" idx={idx} isOpen={isEditOpen} onClose={handleEditClose} />
      <StepDeleteModal idx={idx} isOpen={isDeleteOpen} onClose={handleDeleteClose} />
    </>
  );
};

export default StepBox;
