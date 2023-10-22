import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CommonCheckbox from '@/components/common/Checkbox';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const Checkbox = () => {
  const [checked, setChecked] = useState<boolean>(MEMBER);

  const router = useRouter();
  const { overlapParamsToUrl } = useParamsToUrl();

  useEffect(() => {
    if (!router.isReady) return;

    setChecked(router.query.isMember === 'false' ? MASTER_MANAGER : MEMBER);
  }, [router.isReady]);

  return (
    <Styled.Root>
      <CommonCheckbox
        textSize={0.875}
        label="검색 결과에 마스터 · 매니저 포함"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          overlapParamsToUrl({ isMember: (!e.target.checked).toString() });
        }}
      />
    </Styled.Root>
  );
};

export default Checkbox;

const MASTER_MANAGER = true;
const MEMBER = false;
