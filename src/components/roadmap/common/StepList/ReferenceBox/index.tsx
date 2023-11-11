import { useRouter } from 'next/router';
import type { StepWithReferences } from '@/api/type';
import Button from '@/components/common/Button';
import * as Styled from '@/components/roadmap/common/StepList/ReferenceBox/style';
import ReferenceList from '@/components/roadmap/common/StepList/ReferenceList';
import WebModal from '@/components/roadmap/manage/step/WebModal';
import YoutubeModal from '@/components/roadmap/manage/step/YoutubeModal';
import { useModalState } from '@/hooks/useModalState';

interface ReferenceBoxProps {
  step: StepWithReferences;
  type: 'youtube' | 'web';
}

const ReferenceBox = (props: ReferenceBoxProps) => {
  const { step, type } = props;
  const { isOpen, handleOpen, handleClose } = useModalState();

  const path = useRouter().asPath.split('/').at(-1) === 'step' ? 'manage' : 'detail';

  return (
    <>
      <Styled.Root>
        <Styled.Header>
          <h3>{type === 'youtube' ? '유튜브 영상' : '참고자료'} 링크</h3>
          {path === 'manage' && (
            <Button
              onClick={() => {
                handleOpen();
              }}>
              {type === 'youtube' ? '유튜브 영상' : '참고자료'} 추가하기
            </Button>
          )}
        </Styled.Header>
        <ReferenceList type={type} step={step} />
      </Styled.Root>
      {type === 'web' ? (
        <WebModal step={step} isOpen={isOpen} onClose={handleClose} />
      ) : (
        <YoutubeModal step={step} isOpen={isOpen} onClose={handleClose} />
      )}
    </>
  );
};

export default ReferenceBox;
