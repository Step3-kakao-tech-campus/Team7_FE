import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetRoadmapGroupApply } from '@/api/hooks/roadmap';
import { usePostRoadmapGroupApplyAccept } from '@/api/hooks/roadmap';
import { useDeleteRoadmapGroupApplyReject } from '@/api/hooks/roadmap';
import type { ApplyMember } from '@/api/type';
import ConfirmModal from '@/components/roadmap/manage/apply/ConfirmModal';
import TableColumn from '@/components/roadmap/manage/apply/TableColumn';
import * as Styled from '@/components/roadmap/manage/member/Table/style';
import { useModalState } from '@/hooks/useModalState';

const ApplyTable = () => {
  const [userId, setUserId] = useState<number>(0);
  const [memberInfo, setMemberInfo] = useState<ApplyMember>(ApplyMemberDefault);

  const router = useRouter();
  const { members } = useGetRoadmapGroupApply({ roadmapId: Number(router.query.roadmapId) });
  const { isOpen, handleOpen, handleClose } = useModalState();
  const { postRoadmapGroupApplyAcceptAsync } = usePostRoadmapGroupApplyAccept();
  const { deleteRoadmapGroupApplyRejectAsync } = useDeleteRoadmapGroupApplyReject();

  /*
   * userId가 변경될때 모달에 넘겨줄 유저 데이터를 변경하기 위해 만든 useEffect
   */
  useEffect(() => {
    // userId가 state 초기값 0 이면 useEffect를 실행하지 않음.
    if (userId === 0) return;

    // 찾은 멤버 데이터가 undefined 이면 setMemberInfo를 실행하지 않음.
    const findMember = members.find((member) => member.id === userId);
    if (findMember) setMemberInfo(findMember);
  }, [userId, members]);

  const handleUserId = (userId: number) => {
    setUserId(userId);
  };

  const handleAcceptUser = () => {
    postRoadmapGroupApplyAcceptAsync({
      param: {
        roadmapId: Number(router.query.roadmapId),
        userId: userId,
      },
    });
    handleClose();
  };

  const handleRejectUser = () => {
    deleteRoadmapGroupApplyRejectAsync({
      param: {
        roadmapId: Number(router.query.roadmapId),
        userId: userId,
      },
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
        name={memberInfo.name}
        image={memberInfo.image}
        content={memberInfo.content}
        isOpen={isOpen}
        handleClose={handleClose}
        handleAcceptUser={handleAcceptUser}
        handleRejectUser={handleRejectUser}
      />
    </Styled.Root>
  );
};

export default ApplyTable;

const ApplyMemberDefault = {
  id: 0,
  name: '',
  image: '',
  date: '',
  content: ' ',
};
