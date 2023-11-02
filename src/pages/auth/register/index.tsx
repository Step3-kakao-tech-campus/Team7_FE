import RegisterForm from '@/components/auth/register/RegisterForm';
import FullHeightLayout from '@/components/layout/FullHeightLayout';
import { setLayout } from '@/utils/layout';
import { AuthPageContainer } from './verify';

export const RegisterPage = () => {
  return (
    <AuthPageContainer>
      <RegisterForm />
    </AuthPageContainer>
  );
};

setLayout(RegisterPage, FullHeightLayout);

export default RegisterPage;
