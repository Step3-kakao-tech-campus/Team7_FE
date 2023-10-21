import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Input from '@/components/common/Input';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

const SearchBar = () => {
  const [tilName, setTilName] = useState<string>('');
  const [isUserInputActive, setIsUserInputActive] = useState<boolean>(false);

  const router = useRouter();
  const { overlapParamsToUrl } = useParamsToUrl();

  const handleSearch = (name: string) => {
    // if (!tilName) return;
    overlapParamsToUrl({ name });
  };


  useEffect(() => {
    setTilName(router.query.name ? router.query.name.toString() : '');
  }, [router.isReady]);

  return (
    <Styled.Root
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(tilName);
      }}>
      <Input
        css={Styled.InputContainerStyles}
        inputStyles={Styled.InputStyles}
        placeholder="이름을 입력해주세요"
        endIcon="ic_search_2x"
        value={tilName}
        onChange={(e) => setTilName(e.target.value)}
        onClick={() => handleSearch(tilName)}
      />
    </Styled.Root>
  );
};

export default SearchBar;
