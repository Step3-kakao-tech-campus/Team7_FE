import { css } from '@emotion/react';
import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

export default function Home() {
  return (
    <div>
      <Button px={0.6}>
        <Spinner
          css={css`
            margin-right: 0.5rem;
          `}
          width={14}
          height={14}
        />
        <Button.Text
          css={css`
            margin-right: 0.5rem;
          `}>
          Please Wait
        </Button.Text>
      </Button>
    </div>
  );
}
