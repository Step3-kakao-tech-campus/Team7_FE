import { type SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useGetRoadmapsById, usePostRoadmaps, usePostRoadmapsById } from '@/api/hooks/roadmap';
import type { PostRoadmapsRequest } from '@/api/roadmap/type';
import TILY_LINKS from '@/constants/links';
import useQueryParam from '@/hooks/useQueryParam';

export const useRoadmapInfo = () => {
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
      isPublic: data?.result.isPublic === undefined && true,
      isRecruit: data?.result.isRecruit === undefined && true,
    },
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<PostRoadmapsRequest> = async (formData) => {
    console.log(formData);
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

  return { path, data, createLoading, editLoading, control, handleSubmit, errors, onSubmit };
};
