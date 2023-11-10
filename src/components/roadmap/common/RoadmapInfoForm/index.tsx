import { Controller } from 'react-hook-form';
import { css } from '@emotion/react';
import Button from '@/components/common/Button';
import Flex from '@/components/common/Flex';
import Input from '@/components/common/Input';
import RadioButton from '@/components/common/RadioButton';
import TextArea from '@/components/common/TextArea';
import * as Styled from '@/components/roadmap/common/RoadmapInfoForm/style';
import { useRoadmapInfo } from '@/components/roadmap/common/RoadmapInfoForm/useRoadmapInfo';
import RoadmapDeleteModal from '@/components/roadmap/manage/info/RoadmapDeleteModal';
import TILY_LINKS from '@/constants/links';
import { useModalState } from '@/hooks/useModalState';

const RoadmapInfoForm = () => {
  const { router, roadmapId, path, data, createLoading, editLoading, control, handleSubmit, errors, onSubmit } =
    useRoadmapInfo();

  const { isOpen, handleOpen, handleClose } = useModalState();

  return (
    <>
      <Styled.RoadmapInfoForm path={path!} onSubmit={handleSubmit(onSubmit)}>
        {path === 'create' ? (
          <Flex justify="space-between" align="center">
            <h1>로드맵 정보 입력</h1>
            <Button type="submit" isLoading={createLoading}>
              생성하기
            </Button>
          </Flex>
        ) : (
          <Styled.RoadmapEditButton>
            <h2>로드맵 정보</h2>
            <Flex gap={0.8}>
              <Button
                onClick={() => {
                  router.push(TILY_LINKS.manageStep(Number(roadmapId)));
                }}
                variant="outline">
                STEP 생성
              </Button>
              <Button type="submit" isLoading={editLoading}>
                수정 완료
              </Button>
            </Flex>
          </Styled.RoadmapEditButton>
        )}

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
          <Styled.Label>공개 여부</Styled.Label>
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

        {path === 'info' && (
          <>
            <section>
              <h3
                css={css`
                  margin-bottom: 12px;
                `}>
                모집 여부
              </h3>
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
        {path === 'info' && (
          <Button onClick={handleOpen} type="button" variant="primary">
            로드맵 삭제
          </Button>
        )}
      </Styled.RoadmapInfoForm>
      <RoadmapDeleteModal isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default RoadmapInfoForm;
