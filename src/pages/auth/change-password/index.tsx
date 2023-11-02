import PasswordForm from '@/components/auth/change-password/passwordForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

const ChangePasswordPage = () => {
  return (
    <AuthPageContainer>
      <PasswordForm />
    </AuthPageContainer>
  );
};

setLayout(ChangePasswordPage, FullHeightLayout);

export default ChangePasswordPage;
