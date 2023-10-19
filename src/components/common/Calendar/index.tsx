import dayjs from 'dayjs';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Flex from '@/components/common/Flex';
import IconButton from '@/components/common/IconButton';
import * as Styled from './style';

dayjs().format();

export interface CalendarProps {
  popperPlacement?: 'top' | 'bottom';
  onChangeDate?: (date: Date) => void;
  disabled?: boolean;
}

const Calendar = (props: CalendarProps) => {
  const { onChangeDate, popperPlacement = 'bottom', disabled = false } = props;

  const [date, setDate] = useState(new Date());
  const handleCalendarClose = () => {
    onChangeDate?.(date);
  };
  const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <Styled.CustomContainer>
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date!)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        dateFormat="yyyy-MM-dd"
        popperPlacement={popperPlacement}
        disabled={disabled}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => {
          const monthName = dayjs(date).format('MMMM');

          return (
            <Styled.Header>
              <IconButton
                iconName="ic_chevronLeft"
                variant="outline"
                imageSize={12}
                css={Styled.ButtonStyles}
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              />
              <Flex align="center" justify="center">
                {monthName}
              </Flex>
              <IconButton
                iconName="ic_chevronRight"
                variant="outline"
                imageSize={12}
                css={Styled.ButtonStyles}
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              />
            </Styled.Header>
          );
        }}
      />
    </Styled.CustomContainer>
  );
};

export default Calendar;
