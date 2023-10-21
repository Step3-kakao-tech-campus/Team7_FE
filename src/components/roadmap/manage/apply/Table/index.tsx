import { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapGroupApply } from '@/api/hooks/roadmap';
import { usePostRoadmapGroupApplyAccept } from '@/api/hooks/roadmap';
import { useDelelteRoadmapGroupApplyReject } from '@/api/hooks/roadmap';
import ConfirmModal from '@/components/roadmap/manage/apply/ConfirmModal';
import TableColumn from '@/components/roadmap/manage/apply/TableColumn';
import * as Styled from '@/components/roadmap/manage/member/Table/style';
import { useModalState } from '@/hooks/useModalState';

const ApplyTable = () => {
  const [userId, setUserId] = useState<number>(0);

  const router = useRouter();
  const { members } = useGetRoadmapGroupApply(Number(router.query.roadmapId));
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { postRoadmapGroupApplyAccept } = usePostRoadmapGroupApplyAccept();
  const { delelteRoadmapGroupApplyReject } = useDelelteRoadmapGroupApplyReject();

  const handleUserId = (userId: number) => {
    setUserId(userId);
  };

  const handleAcceptUser = () => {
    postRoadmapGroupApplyAccept({
      roadmapId: Number(router.query.roadmapId),
      userId: userId,
    });
    handleClose();
  };

  const handleRejectUser = () => {
    delelteRoadmapGroupApplyReject({
      roadmapId: Number(router.query.roadmapId),
      userId: userId,
    });
    handleClose();
  };

  return (
    <Styled.Root>
      <Styled.ApplyTableHead>
        <tr>
          <th>이름</th>
          <th>신청일</th>
          <th>신청서 확인</th>
        </tr>
      </Styled.ApplyTableHead>
      <Styled.TableBody>
        {members.map((member, index) => (
          <TableColumn key={index} {...member} handleUserId={handleUserId} handleOpen={handleOpen} />
        ))}
      </Styled.TableBody>

      <ConfirmModal
        isOpen={isOpen}
        handleClose={handleClose}
        handleAcceptUser={handleAcceptUser}
        handleRejectUser={handleRejectUser}
      />
    </Styled.Root>
  );
};

export default ApplyTable;
