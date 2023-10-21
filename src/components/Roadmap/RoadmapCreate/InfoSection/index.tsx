import * as Styled from '@/components/Roadmap/RoadmapCreate/InfoSection/style';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import type { RoadmapInfo } from '@/pages/roadmap/create';

interface InfoSectionProps {
  info: RoadmapInfo;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InfoSection = (props: InfoSectionProps) => {
  const { info, handleOnChange } = props;
  return (
    <>
      <Input
        label="로드맵 이름"
        labelType="bold"
        placeholder="이름을 입력해주세요."
        name="name"
        value={info.name}
        onChange={handleOnChange}
      />
      <TextArea
        label="로드맵 설명"
        labelType="bold"
        placeholder="설명을 입력해주세요."
        rows={7}
        name="description"
        value={info.description}
        onChange={handleOnChange}
      />

      <Styled.RadioContainer>
        <h3>공개 여부</h3>
        <Styled.ButtonContainer>
          <RadioButton label="공개" name="isPublic" value="public" checked={info.isPublic} onChange={handleOnChange} />
          <RadioButton
            label="비공개"
            name="isPublic"
            value="private"
            checked={!info.isPublic}
            onChange={handleOnChange}
          />
        </Styled.ButtonContainer>
      </Styled.RadioContainer>
    </>
  );
};

export default InfoSection;
