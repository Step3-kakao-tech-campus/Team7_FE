import RegisterForm from '@/components/auth/register/RegisterForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { AuthPageContainer } from '@/pages/auth/register/verify';
import { setLayout } from '@/utils/layout';

export const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <RegisterForm />
    </AuthPageContainer>
  );
};

setLayout(RegisterPage, FullHeightLayout);

export default RegisterPage;
