import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDeleteRoadmapGroupMember, useGetRoadmapGroupMember } from '@/api/hooks/roadmap';
import BanUserModal from '@/components/roadmap/manage/member/BanUserModal';
import TableColumn from '@/components/roadmap/manage/member/TableColumn';
import { useModalState } from '@/hooks/useModalState';
import * as Styled from './style';

const ManageTable = () => {
  const [userId, setUserId] = useState<number>(0);

  const router = useRouter();
  const { members, myRole } = useGetRoadmapGroupMember({ roadmapId: Number(router.query.roadmapId) });
  const { deleteRoadmapGroupMemberAsync } = useDeleteRoadmapGroupMember();
  const { isOpen, handleOpen, handleClose } = useModalState();

  const handleUserId = (userId: number) => {
    setUserId(userId);
  };

  const handleBanUser = () => {
    deleteRoadmapGroupMemberAsync({
      param: {
        roadmapId: Number(router.query.roadmapId),
        userId: userId,
      },
    });
    handleClose();
  };

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
        {members.map((member, index) => (
          <TableColumn key={index} myRole={myRole} {...member} handleUserId={handleUserId} handleOpen={handleOpen} />
        ))}
      </Styled.TableBody>

      <BanUserModal isOpen={isOpen} handleClose={handleClose} handleBanUser={handleBanUser} />
    </Styled.Root>
  );
};

export default ManageTable;
