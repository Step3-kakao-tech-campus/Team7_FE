import * as Styled from '@/components/Roadmap/RoadmapCreate/InfoSection/style';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import { useRoadmap } from '@/hooks/useRoadmap';

interface InfoSectionProps {
  where: 'create' | 'manage';
}

const InfoSection = (props: InfoSectionProps) => {
  const { where } = props;

  const { roadmap, handleInfoChange, infoValid, onCreateRoadmapHandler, isLoading } = useRoadmap();

  return (
    <Styled.Root where={where}>
      {where === 'create' ? (
        <Styled.CreateHeader>
          <h1>그룹 로드맵 생성</h1>
          <Button onClick={onCreateRoadmapHandler} isLoading={isLoading}>
            생성하기
          </Button>
        </Styled.CreateHeader>
      ) : (
        <Styled.EditHeader>
          <h1>로드맵 정보</h1>
          <Button>수정 완료</Button>
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
  );
};

export default InfoSection;
