import { css } from '@emotion/react';
import Input from '@/components/Input';

export default function Home() {
  return (
    <div style={{ padding: '30px' }}>
      <Input
        label={'이메일'}
        status="error"
        message="This is an error message"
        placeholder={'이메일을 입력해주세요.'}
        css={css`
          width: 1000px;
        `}
      />
    </div>
  );
}
