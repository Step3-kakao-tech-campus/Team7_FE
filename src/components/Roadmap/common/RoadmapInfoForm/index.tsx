import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useGetRoadmapsById, usePostRoadmaps, usePostRoadmapsById } from '@/api/hooks/roadmap';
import type { PostRoadmapsRequest } from '@/api/roadmap/type';
import * as Styled from '@/components/Roadmap/common/RoadmapInfoForm/style';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import TILY_LINKS from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

const RoadmapInfoForm = () => {
  const roadmapId = useQueryParam('roadmapId');
  const router = useRouter();
  const path = router.asPath.split('/').at(-1);

  const { postRoadmapsAsync, isLoading: createLoading } = usePostRoadmaps();
  const { postRoadmapsByIdAsync, isLoading: editLoading } = usePostRoadmapsById();
  const { data } = useGetRoadmapsById({ roadmapId: Number(roadmapId) });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.result.name || '',
      description: data?.result.description || '',
      isPublic: data?.result.isPublic || true,
      isRecruit: data?.result.isRecruit || true,
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<PostRoadmapsRequest> = async (formData) => {
    if (path === 'create') {
      const { isRecruit, ...restFormData } = formData;
      const data = await postRoadmapsAsync({ body: restFormData });

      if (data?.code === 200) {
        router.push(TILY_LINKS.manageGroupInfo(data?.result.id));
      }
      return;
    }
    if (path === 'roadmapInfo') {
      await postRoadmapsByIdAsync({ roadmapId: Number(roadmapId), body: formData });

      return;
    }
  };

  return (
    <>
      <Styled.RoadmapInfoForm onSubmit={handleSubmit(onSubmit)}>
        <Flex justify="space-between">
          {path === 'create' ? (
            <>
              <h1>로드맵 정보 입력</h1>
              <Button type="submit" isLoading={createLoading}>
                생성하기
              </Button>
            </>
          ) : (
            <>
              <h1>로드맵 정보</h1>
              <Button type="submit" isLoading={editLoading}>
                수정 완료
              </Button>
            </>
          )}
        </Flex>

        <Controller
          name="name"
          control={control}
          rules={{ required: '로드맵 이름을 입력해주세요.' }}
          render={({ field }) => (
            <Input
              label="로드맵 이름"
              labelType="bold"
              placeholder="이름을 입력해주세요."
              status={errors.name && 'error'}
              message={errors.name?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextArea label="로드맵 설명" labelType="bold" placeholder="설명을 입력해주세요." rows={7} {...field} />
          )}
        />
        <section>
          <h3>공개 여부</h3>
          <Flex gap={0.8}>
            <Controller
              name="isPublic"
              control={control}
              defaultValue={true}
              render={({ field: { onChange, value, ...props } }) => (
                <>
                  <RadioButton
                    label="공개"
                    onChange={(e) => {
                      onChange(JSON.parse(e.target.value));
                    }}
                    value="true"
                    checked={value}
                    {...props}
                  />
                  <RadioButton
                    label="비공개"
                    onChange={(e) => {
                      onChange(JSON.parse(e.target.value));
                    }}
                    value="false"
                    checked={!value}
                    {...props}
                  />
                </>
              )}
            />
          </Flex>
        </section>

        {path === 'roadmapInfo' && (
          <>
            <section>
              <h3>모집 여부</h3>
              <Flex gap={0.8}>
                <Controller
                  name="isRecruit"
                  control={control}
                  defaultValue={true}
                  render={({ field: { onChange, value, ...props } }) => (
                    <>
                      <RadioButton
                        label="희망"
                        onChange={(e) => {
                          onChange(JSON.parse(e.target.value));
                        }}
                        value="true"
                        checked={value}
                        {...props}
                      />
                      <RadioButton
                        label="비희망"
                        onChange={(e) => {
                          onChange(JSON.parse(e.target.value));
                        }}
                        value="false"
                        checked={!value}
                        {...props}
                      />
                    </>
                  )}
                />
              </Flex>
            </section>
            <Input label="참여 코드" value={data?.result.code} labelType="bold" disabled />
          </>
        )}
      </Styled.RoadmapInfoForm>
    </>
  );
};

export default RoadmapInfoForm;
