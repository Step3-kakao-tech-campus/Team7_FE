import VerifyForm from '@/components/auth/verify/VerifyForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const PasswordVerifyPage = () => {
  return (
    <AuthPageContainer>
      <VerifyForm location="password" />
    </AuthPageContainer>
  );
};

setLayout(PasswordVerifyPage, FullHeightLayout);

export default PasswordVerifyPage;
