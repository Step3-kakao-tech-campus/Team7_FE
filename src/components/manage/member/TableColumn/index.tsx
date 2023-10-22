import { useState } from 'react';
import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import Select from '@/components/common/Select';
import type { SelectOption } from '@/components/common/Select';
import * as Styled from './style';

const selectOptionItems: SelectOption[] = [
  {
    label: '매니저',
    value: '매니저',
  },
  {
    label: '멤버',
    value: '멤버',
  },
];

const defaultValue = { label: '멤버', value: '멤버' };

const TableColumn = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOption | undefined>(defaultValue);

  return (
    <tr>
      <td>
        <Avatar iconName="ic_profile" alt="프로필 이미지" imageSize={46} />
        조준서
      </td>

      <td>
        <Select
          selectedOption={selectedOption}
          onChangeOption={(option) => setSelectedOption(option)}
          options={selectOptionItems}
        />
      </td>

      <td>
        <Button variant="primary" css={Styled.ButtonStyles}>
          강퇴
        </Button>
      </td>
    </tr>
  );
};

export default TableColumn;
