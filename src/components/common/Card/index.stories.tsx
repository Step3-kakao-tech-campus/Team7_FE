import type { Meta } from '@storybook/react';
import Card from '@/components/common/Card';
import Flex from '@/components/common/Flex';

export default {
  component: Card,
} as Meta<typeof Card>;

export const Default = {
  render: () => {
    return (
      <Card>
        <Flex justify="center" align="center" style={{ height: '300px' }}>
          기본 텍스트 입니다.
        </Flex>
      </Card>
    );
  },
  name: 'Default',
};
