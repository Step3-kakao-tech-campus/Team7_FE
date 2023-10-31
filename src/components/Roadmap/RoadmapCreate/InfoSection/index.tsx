import * as Styled from '@/components/Roadmap/RoadmapCreate/InfoSection/style';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import { useRoadmapInfo } from '@/hooks/useRoadmapCreate';

const InfoSection = () => {
  const { info, handleInfoChange, roadmapValid, onCreateRoadmapHandler, isLoading } = useRoadmapInfo();
  return (
    <Styled.Root>
      <Styled.Header>
        <h1>그룹 로드맵 생성</h1>
        <Button onClick={onCreateRoadmapHandler} isLoading={isLoading}>
          생성하기
        </Button>
      </Styled.Header>
      <Input
        label="로드맵 이름"
        labelType="bold"
        placeholder="이름을 입력해주세요."
        name="name"
        status={roadmapValid ? 'default' : 'error'}
        message={'필수 정보 입니다.'}
        value={info?.name}
        onChange={handleInfoChange}
      />
      <TextArea
        label="로드맵 설명"
        labelType="bold"
        placeholder="설명을 입력해주세요."
        rows={7}
        name="description"
        value={info?.description}
        onChange={handleInfoChange}
      />

      <Styled.RadioContainer>
        <h3>공개 여부</h3>
        <Styled.ButtonContainer>
          <RadioButton
            label="공개"
            name="isPublic"
            value="public"
            checked={info?.isPublic}
            onChange={handleInfoChange}
          />
          <RadioButton
            label="비공개"
            name="isPublic"
            value="private"
            checked={!info?.isPublic}
            onChange={handleInfoChange}
          />
        </Styled.ButtonContainer>
      </Styled.RadioContainer>
    </Styled.Root>
  );
};

export default InfoSection;
