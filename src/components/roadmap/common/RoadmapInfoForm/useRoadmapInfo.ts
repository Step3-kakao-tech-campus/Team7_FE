import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useGetRoadmapsById, usePatchRoadmaps, usePostRoadmaps } from '@/api/hooks/roadmap';
import type { PostRoadmapsRequest } from '@/api/roadmap/type';
import TILY_LINKS from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

export const useRoadmapInfo = () => {
  const roadmapId = useQueryParam('roadmapId');
  const router = useRouter();
  const path = router.asPath.split('/').at(-1);

  const { postRoadmapsAsync, isLoading: createLoading } = usePostRoadmaps();
  const { patchRoadmapsAsync, isLoading: editLoading } = usePatchRoadmaps();
  const { data, isLoading: infoLoading } = useGetRoadmapsById({ roadmapId: Number(roadmapId) });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      isPublic: true,
      isRecruit: true,
    },
    mode: 'onSubmit',
  });

  useEffect(() => {
    if (!infoLoading && data) {
      setValue('name', data?.result.name);
      setValue('description', data?.result.description);
      setValue('isPublic', data?.result.isPublic);
      setValue('isRecruit', data?.result.isRecruit);
    }
  }, [infoLoading, data, setValue]);

  const onSubmit: SubmitHandler<PostRoadmapsRequest> = async (formData) => {
    if (path === 'create') {
      const { isRecruit, ...restFormData } = formData;
      const data = await postRoadmapsAsync({ body: { ...restFormData, category: 'group' } });

      if (data?.code === 201) {
        router.push(TILY_LINKS.manageStep(data?.result.id));
      }
      return;
    }
    if (path === 'info') {
      await patchRoadmapsAsync({ roadmapId: Number(roadmapId), body: formData });

      return;
    }
  };

  return {
    router,
    roadmapId,
    path,
    data,
    infoLoading,
    createLoading,
    editLoading,
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
