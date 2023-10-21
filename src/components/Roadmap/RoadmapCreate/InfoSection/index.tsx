import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import * as Styled from '@/components/Roadmap/RoadmapCreate/InfoSection/style';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import { roadmapInfoAtoms } from '../states/roadmapCreateAtoms';

const InfoSection = () => {
  const [info, setInfo] = useRecoilState(roadmapInfoAtoms);

  const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInfo({ ...info, [name]: value === 'public' ? true : value === 'private' ? false : value });
  };

  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <>
      <Input
        label="로드맵 이름"
        labelType="bold"
        placeholder="이름을 입력해주세요."
        name="name"
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
    </>
  );
};

export default InfoSection;
