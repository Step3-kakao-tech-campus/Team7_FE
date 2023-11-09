import { useRouter } from 'next/router';
import { useDeleteRoadmaps } from '@/api/hooks/roadmap';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import type { ModalProps } from '@/components/common/Modal';
import Modal from '@/components/common/Modal';
import TwoButtonContainer from '@/components/common/TwoButtonContainer';
import TILY_LINKS from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

const RoadmapDeleteModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const roadmapId = Number(useQueryParam('roadmapId'));
  const router = useRouter();

  const { deleteRoadmapsAsync } = useDeleteRoadmaps();

  const handleDeleteRoadmap = async () => {
    const data = await deleteRoadmapsAsync({ roadmapId });

    if (data?.code === 200) {
      router.push(TILY_LINKS.roadmap());
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} width={40}>
      <Flex dir="col" gap={2}>
        <h2>로드맵 삭제</h2>
        <section>
          <p>
            정말 로드맵을 <b>삭제</b>하시겠습니까? 삭제한 로드맵은 <b>되돌릴 수 없습니다.</b>
          </p>
        </section>
        <TwoButtonContainer>
          <Button>취소</Button>
          <Button variant="primary" onClick={handleDeleteRoadmap}>
            삭제
          </Button>
        </TwoButtonContainer>
      </Flex>
    </Modal>
  );
};

export default RoadmapDeleteModal;
