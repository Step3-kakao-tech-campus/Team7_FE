import type { Meta, StoryObj } from '@storybook/react';
import InfoArea from '@/components/common/InfoArea';

export default {
  component: InfoArea,
} as Meta<typeof InfoArea>;

export const DotLeft: StoryObj<typeof InfoArea> = {
  args: {
    children: (
      <>
        <InfoArea.Info>STEP은 로드맵의 한 단계입니다.</InfoArea.Info>
        <InfoArea.Info>STEP들을 추가하여 로드맵을 완성해보세요.</InfoArea.Info>
        <InfoArea.Info>STEP에는 참고 자료와 동영상 자료를 삽입할 수 있습니다.</InfoArea.Info>
      </>
    ),
  },
};

export const NoDotCenter: StoryObj<typeof InfoArea> = {
  args: {
    isDot: false,
    textAlign: 'center',
    children: (
      <>
        <InfoArea.Info>해당 이메일로 인증코드를 전송하였습니다.</InfoArea.Info>
        <InfoArea.Info>아래에 인증코드를 입력해주세요.</InfoArea.Info>
      </>
    ),
  },
};
