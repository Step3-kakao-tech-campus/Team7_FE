import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from '@/components/common/Calendar';

export default {
  component: Calendar,
} as Meta<typeof Calendar>;

export const WithState: StoryObj<typeof Calendar> = {
  render: function Render() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
      console.log(date);
    }, [date]);

    const handleDate = (date: Date) => {
      setDate(date);
    };

    return <Calendar onChangeDate={(date: Date) => handleDate(date)} />;
  },
};

export const UpperCalendar: StoryObj<typeof Calendar> = {
  render: function Render() {
    return (
      <>
        <div
          css={css`
            background-color: white;
            height: 300px;
          `}
        />
        <Calendar popperPlacement="top" />
      </>
    );
  },
};
