import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Flex from '@/components/common/Flex';
import IconButton from '@/components/common/IconButton';
import * as Styled from './style';

dayjs().format();

export interface CalendarProps {
  popperPlacement?: 'top' | 'bottom';
  onChangeDate?: (date: Date | null) => void;
  disabled?: boolean;
  minDate?: Date;
  isTimeInclude?: boolean;
  date?: Date | null;
}

const Calendar = (props: CalendarProps) => {
  const {
    onChangeDate,
    popperPlacement = 'bottom',
    disabled = false,
    minDate,
    isTimeInclude = false,
    date: externalDate = new Date(),
  } = props;

  const [date, setDate] = useState(externalDate);
  useEffect(() => {
    setDate(externalDate);
  }, [externalDate]);
  const handleCalendarClose = () => {
    onChangeDate?.(date);
  };
  const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <Styled.CustomContainer isTimeInclude={isTimeInclude}>
      <DatePicker
        onFocus={(e) => e.target.blur()}
        selected={date}
        onChange={(date) => setDate(date!)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        dateFormat={isTimeInclude ? 'yyyy-MM-dd | HH:mm' : 'yyyy-MM-dd'}
        timeIntervals={30}
        showTimeSelect={isTimeInclude}
        popperPlacement={popperPlacement}
        minDate={minDate}
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
                iconName="ic_chevronLeftBlack"
                variant="outline"
                type="button"
                imageSize={12}
                css={Styled.ButtonStyles}
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
              />
              <Flex align="center" justify="center">
                {monthName}
              </Flex>
              <IconButton
                iconName="ic_chevronRightBlack"
                variant="outline"
                type="button"
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
