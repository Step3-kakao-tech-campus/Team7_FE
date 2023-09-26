import { css } from '@emotion/react';
// import Input from '@/components/Input';
import InputField from '@/components/Input';

export default function Home() {
  return (
    <div style={{ padding: '30px' }}>
      <InputField>
        <InputField.Label
          css={css`
            font-weight: 700;
            font-size: 1.325rem;
          `}>
          이메일
        </InputField.Label>
        <InputField.Input
          status="error"
          placeholder="이메일을 입력해주세요."
          css={css`
            width: 400px;
          `}
        />
        <InputField.Message>This is an error message</InputField.Message>
      </InputField>
    </div>
  );
}
