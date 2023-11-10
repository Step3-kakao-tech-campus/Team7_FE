import TILyHead from '@/components/common/NextHead/TILyHead';
import ManageLayout from '@/components/layout/ManageLayout';
import StepList from '@/components/roadmap/common/StepList';
import { setLayout } from '@/utils/layout';

const ManageStepPage = () => {
  return (
    <>
      <TILyHead title="TIL-y | STEP 관리" />
      <StepList />
    </>
  );
};

setLayout(ManageStepPage, ManageLayout);

export default ManageStepPage;
