import { useRecoilState } from 'recoil';
import { roadmapStepAtoms } from '@/components/Roadmap/RoadmapCreate/states/roadmapCreateAtoms';

export const useReference = (type: string, stepIdx: number) => {
  const [stepList, setStepList] = useRecoilState(roadmapStepAtoms);

  // 타입에 따라서 step의 참고자료 목록에서 가져옴
  let references;
  if (type === 'youtube') {
    references = stepList[stepIdx].references.youtube;
  } else {
    references = stepList[stepIdx].references.web;
  }

  // 참고자료 한가지를 삭제하는 함수
  const handleDeleteReference = (idx: number) => {
    const newStepList = [...stepList];
    const newReferences = { ...stepList[stepIdx].references };

    if (type === 'youtube') {
      const newYoutube = [...stepList[stepIdx].references.youtube];
      newYoutube.splice(idx, 1);
      newReferences.youtube = newYoutube;
    } else {
      const newWeb = [...stepList[stepIdx].references.web];
      newWeb.splice(idx, 1);
      newReferences.web = newWeb;
    }

    newStepList[stepIdx] = { ...newStepList[stepIdx], references: newReferences };

    setStepList(newStepList);
  };

  return { references, handleDeleteReference };
};
