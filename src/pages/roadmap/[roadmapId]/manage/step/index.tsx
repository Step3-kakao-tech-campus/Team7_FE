import ManageLayout from '@/components/layout/ManageLayout';
import StepSection from '@/components/roadmap/roadmapCreate/StepSection';
import { setLayout } from '@/utils/layout';

const ManageStepPage = () => {
  return (
    <>
      <StepSection />
    </>
  );
};

setLayout(ManageStepPage, ManageLayout);

export default ManageStepPage;
