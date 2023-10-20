import { useRouter } from 'next/router';
import { useGetRoadmapGroupMember } from '@/api/hooks/roadmap';
import TableColumn from '@/components/roadmap/manage/member/TableColumn';
import * as Styled from './style';

const ManageTable = () => {
  const router = useRouter();

  const { members, myRole } = useGetRoadmapGroupMember(Number(router.query.roadmapId));

  return (
    <Styled.Root>
      <Styled.TableHead>
        <tr>
          <th>이름</th>
          <th>역할</th>
          {myRole === 'master' && <th>강퇴</th>}
        </tr>
      </Styled.TableHead>
      <Styled.TableBody>
        {members.map((member, index) => (
          <TableColumn key={index} myRole={myRole} {...member} />
        ))}
      </Styled.TableBody>
    </Styled.Root>
  );
};

export default ManageTable;
