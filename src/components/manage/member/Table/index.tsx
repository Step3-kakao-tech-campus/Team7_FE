import TableColumn from '@/components/manage/member/TableColumn';
import * as Styled from './style';

const ManageTable = () => {
  return (
    <Styled.Root>
      <Styled.TableHead>
        <tr>
          <th>이름</th>
          <th>역할</th>
          <th>강퇴</th>
        </tr>
      </Styled.TableHead>
      <Styled.TableBody>
        {Array.from({ length: 20 }).map((_, index) => (
          <TableColumn key={index} />
        ))}
      </Styled.TableBody>
    </Styled.Root>
  );
};

export default ManageTable;
