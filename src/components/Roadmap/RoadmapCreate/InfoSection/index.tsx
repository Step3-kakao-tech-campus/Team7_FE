import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import EscapeModal from '@/components/Roadmap/RoadmapCreate/EscapeModal';
import * as Styled from '@/components/Roadmap/RoadmapCreate/InfoSection/style';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import { useModalState } from '@/hooks/useModalState';
import { useRoadmap } from '@/hooks/useRoadmap';

interface InfoSectionProps {
  where: 'create' | 'manage';
}

const InfoSection = (props: InfoSectionProps) => {
  const { where } = props;
  const router = useRouter();

  const { isOpen, handleOpen, handleClose } = useModalState();

  const {
    roadmap,
    handleInfoChange,
    infoValid,
    onCreateRoadmapHandler,
    onEditRoadmapHandler,
    createLoading,
    editLoading,
    isSaved,
    setIsSaved,
  } = useRoadmap();

  const handleBeforeunload = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = '';

    return;
  };

  const handleRouteChange = useCallback(() => {
    if (!isSaved) {
      if (router.asPath !== window.location.pathname) {
        window.history.pushState('', '', router.asPath);
      }

      handleOpen();

      router.events.emit('routeChangeError');
      throw '로드맵이 저장되지 않았습니다.';
    }
  }, [isSaved, handleOpen, router.asPath, router.events]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeunload);
    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeunload);
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [handleRouteChange, router.events]);

  return (
    <>
      <Styled.Root where={where}>
        {where === 'create' ? (
          <Styled.CreateHeader>
            <h1>그룹 로드맵 생성</h1>
            <Button onClick={onCreateRoadmapHandler} isLoading={createLoading}>
              생성하기
            </Button>
          </Styled.CreateHeader>
        ) : (
          <Styled.EditHeader>
            <h1>로드맵 정보</h1>
            <Button onClick={onEditRoadmapHandler} isLoading={editLoading}>
              수정 완료
            </Button>
          </Styled.EditHeader>
        )}

        <Input
          label="로드맵 이름"
          labelType="bold"
          placeholder="이름을 입력해주세요."
          name="name"
          status={infoValid ? 'default' : 'error'}
          message={'필수 정보 입니다.'}
          value={roadmap.name}
          onChange={handleInfoChange}
        />
        <TextArea
          label="로드맵 설명"
          labelType="bold"
          placeholder="설명을 입력해주세요."
          rows={7}
          name="description"
          value={roadmap.description}
          onChange={handleInfoChange}
        />

        <Styled.RadioContainer>
          <h3>공개 여부</h3>
          <Styled.ButtonContainer>
            <RadioButton
              label="공개"
              name="isPublic"
              value="true"
              checked={roadmap.isPublic}
              onChange={handleInfoChange}
            />
            <RadioButton
              label="비공개"
              name="isPublic"
              value="false"
              checked={!roadmap.isPublic}
              onChange={handleInfoChange}
            />
          </Styled.ButtonContainer>
        </Styled.RadioContainer>
        {where === 'manage' && (
          <>
            <Styled.RadioContainer>
              <h3>모집 여부</h3>
              <Styled.ButtonContainer>
                <RadioButton
                  label="희망"
                  name="isRecruit"
                  value="true"
                  checked={roadmap.isRecruit}
                  onChange={handleInfoChange}
                />
                <RadioButton
                  label="비희망"
                  name="isRecruit"
                  value="false"
                  checked={!roadmap.isRecruit}
                  onChange={handleInfoChange}
                />
              </Styled.ButtonContainer>
            </Styled.RadioContainer>
            <Input label="참여 코드" value={roadmap.code} disabled />
          </>
        )}
      </Styled.Root>
      <EscapeModal isOpen={isOpen} onClose={handleClose} callback={setIsSaved} />
    </>
  );
};

export default InfoSection;
