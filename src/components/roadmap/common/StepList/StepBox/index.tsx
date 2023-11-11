import dayjs from 'dayjs';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { StepWithReferences } from '@/api/type';
import * as Styled from '@/components/roadmap/common/StepList/StepBox/style';
import StepModal from '@/components/roadmap/manage/step/StepModal';
import { useModalState } from '@/hooks/useModalState';
import StepDeleteModal from '../../../manage/step/StepDeleteModal';
import ReferenceBox from '../ReferenceBox';

interface StepBoxProps {
  step: StepWithReferences;
}

const StepBox = (props: StepBoxProps) => {
  const { step } = props;

  const path = useRouter().asPath.split('/').at(-1) === 'step' ? 'manage' : 'detail';

  // STEP 수정하기 Modal
  const { isOpen: isEditOpen, handleOpen: handleEditOpen, handleClose: handleEditClose } = useModalState();
  // STEP 삭제하기 Modal
  const { isOpen: isDeleteOpen, handleOpen: handleDeleteOpen, handleClose: handleDeleteClose } = useModalState();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <article>
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
            <section>
              <b>제출기한</b>
              {step.dueDate ? <p>{dayjs(step.dueDate).format('YYYY-MM-DD | HH:mm')}</p> : <p>기한 없음</p>}
            </section>

            {path === 'manage' && (
              <>
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
              </>
            )}
          </Styled.ButtonContainer>
        </Styled.Header>
        {isOpen && (
          <Styled.ContentContainer>
            <p>{step.description}</p>
            <ReferenceBox step={step} type="youtube" />
            <ReferenceBox step={step} type="web" />
          </Styled.ContentContainer>
        )}
      </article>

      {path === 'manage' && (
        <>
          <StepModal isEdit={true} step={step} isOpen={isEditOpen} onClose={handleEditClose} />
          <StepDeleteModal step={step} isOpen={isDeleteOpen} onClose={handleDeleteClose} />
        </>
      )}
    </>
  );
};

export default StepBox;
