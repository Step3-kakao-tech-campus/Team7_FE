import ManageLayout from '@/components/layout/ManageLayout';
import StepList from '@/components/roadmap/manage/step/StepList';
import { setLayout } from '@/utils/layout';

const ManageStepPage = () => {
  return (
    <>
      <StepList />
    </>
  );
};

setLayout(ManageStepPage, ManageLayout);

export default ManageStepPage;
