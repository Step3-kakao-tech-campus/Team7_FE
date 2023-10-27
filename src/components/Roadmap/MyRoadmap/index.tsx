import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { usePostRoadmapsGroupsParticipate } from '@/api/hooks/roadmap';
import * as Style from '@/components/Roadmap/MyRoadmap/style';
import TilyCard from '@/components/Roadmap/TilyCard';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Modal from '@/components/common/Modal';
import { tilyLinks } from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';
import GroupCard from '../GroupCard';

const MyRoadmap = () => {
  const { isOpen, handleOpen, handleClose } = useModalState();

  const { postRoadmapsGroupsParticipate, isLoading } = usePostRoadmapsGroupsParticipate();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { code: '' }, mode: 'onSubmit' });

  const onSubmit: SubmitHandler<{ code: string }> = async (formData) => {
    const data = await postRoadmapsGroupsParticipate(formData.code);

    if (data.success) handleClose();
  };

  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Style.Header>
        <h2>참여중인 로드맵</h2>
        <Style.ButtonContainer>
          <Button
            variant="outline"
            onClick={() => {
              handleOpen();
              reset();
            }}>
            코드로 참여하기
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              router.push(tilyLinks.roadmapCreate());
            }}>
            로드맵 생성
          </Button>
        </Style.ButtonContainer>
      </Style.Header>
      <Style.Slider {...setting}>
        <TilyCard />
        <TilyCard />
        <GroupCard />
        <GroupCard />
        <TilyCard />
        <TilyCard />
        <GroupCard />
        <GroupCard />
      </Style.Slider>

      <Modal isOpen={isOpen} onClose={handleClose}>
        <Style.RoadmapCodeModal>
          <h3>로드맵에 참여해보세요.</h3>
          <Style.RoadmapCodeForm onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="code"
              control={control}
              rules={{ required: '코드를 입력해주세요.' }}
              render={({ field }) => (
                <Input
                  placeholder="코드를 입력해주세요."
                  message={errors.code?.message}
                  status={errors.code ? 'error' : 'default'}
                  {...field}
                />
              )}
            />
            <Button isLoading={isLoading}>참여하기</Button>
          </Style.RoadmapCodeForm>
        </Style.RoadmapCodeModal>
      </Modal>
    </>
  );
};

export default MyRoadmap;
