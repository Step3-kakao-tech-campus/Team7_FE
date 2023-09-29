import dayjs from 'dayjs';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Flex from '@/components/common/Flex';
import IconButton from '@/components/common/IconButton';
import * as Styled from './style';

dayjs().format();

export interface CalendarProps {
  onChangeDate?: (date: Date) => void;
}

const Calendar = (props: CalendarProps) => {
  const { onChangeDate } = props;

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
        popperPlacement="top"
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
                imageHeight={12}
                imageWidth={12}
                css={Styled.ButtonCSS}
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              />
              <Flex align="center" justify="center">
                {monthName}
              </Flex>
              <IconButton
                iconName="ic_chevronRight"
                variant="outline"
                imageHeight={12}
                imageWidth={12}
                css={Styled.ButtonCSS}
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
