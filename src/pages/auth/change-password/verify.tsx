import VerifyForm from '@/components/auth/verify/VerifyForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { VerifyPage } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const PasswordVerifyPage = () => {
  return (
    <VerifyPage>
      <VerifyForm location="password" />
    </VerifyPage>
  );
};

setLayout(PasswordVerifyPage, FullHeightLayout);

export default PasswordVerifyPage;
