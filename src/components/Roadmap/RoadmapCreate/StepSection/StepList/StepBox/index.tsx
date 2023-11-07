import dayjs from 'dayjs';
import { useState } from 'react';
import Image from 'next/image';
import type { StepWithReferences } from '@/api/type';
import WebBox from '@/components/roadmap/roadmapCreate/StepSection/StepList/StepBox/WebBox';
import YoutubeBox from '@/components/roadmap/roadmapCreate/StepSection/StepList/StepBox/YoutubeBox';
import * as Styled from '@/components/roadmap/roadmapCreate/StepSection/StepList/StepBox/style';
import StepModal from '@/components/roadmap/roadmapCreate/StepSection/StepModal';
import type { Step } from '@/components/roadmap/roadmapCreate/states/roadmapCreateAtoms';
import { useModalState } from '@/hooks/useModalState';
import StepDeleteModal from '../../StepDeleteModal';

interface StepBoxProps {
  step: Step;
  idx: number;
  where: 'detail' | 'create';
}

const StepBox = (props: StepBoxProps) => {
  const { step, idx, where } = props;

  // STEP 수정하기 Modal
  const { isOpen: isEditOpen, handleOpen: handleEditOpen, handleClose: handleEditClose } = useModalState();
  // STEP 삭제하기 Modal
  const { isOpen: isDeleteOpen, handleOpen: handleDeleteOpen, handleClose: handleDeleteClose } = useModalState();

  const [isOpen, setIsOpen] = useState<boolean>(idx === 0);

  return (
    <>
      <Styled.StepContainer>
        <Styled.Header
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}>
          <Styled.TitleContainer>
            <Image
              src={`/assets/icons/ic_chevron${isOpen ? 'Up' : 'Down'}Black.svg`}
              alt={`${isOpen ? '위' : '아래'} 화살표`}
              width={15}
              height={15}
            />
            <h3>{step.title}</h3>
          </Styled.TitleContainer>
          <Styled.ButtonContainer>
            {step.dueDate && (
              <section>
                <b>제출기한</b>
                <p>{dayjs(step.dueDate).format('YYYY-MM-DD | HH:mm')}</p>
              </section>
            )}
            {where === 'create' && (
              <section>
                <Image
                  src="/assets/icons/ic_edit.svg"
                  alt="STEP 수정하기"
                  title="수정하기"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEditOpen();
                  }}
                  width={25}
                  height={25}
                />
                <Image
                  src="/assets/icons/ic_trash.svg"
                  alt="STEP 삭제하기"
                  title="삭제하기"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteOpen();
                  }}
                  width={25}
                  height={25}
                />
              </section>
            )}
          </Styled.ButtonContainer>
        </Styled.Header>
        {isOpen && (
          <Styled.ContentContainer>
            <p>{step.description}</p>
            <YoutubeBox idx={idx} where={where} />
            <WebBox idx={idx} where={where} />
          </Styled.ContentContainer>
        )}
      </Styled.StepContainer>
      {where === 'create' && (
        <>
          <StepModal type="edit" idx={idx} isOpen={isEditOpen} onClose={handleEditClose} />
          <StepDeleteModal idx={idx} isOpen={isDeleteOpen} onClose={handleDeleteClose} />
        </>
      )}
    </>
  );
};

export default StepBox;
