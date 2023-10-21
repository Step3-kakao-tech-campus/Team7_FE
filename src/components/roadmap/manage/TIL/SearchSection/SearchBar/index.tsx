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

  const handleResetSearch = () => {
    setTilName('');
    overlapParamsToUrl({ name: '' });
  };

  useEffect(() => {
    if (!router.isReady) return;

    setTilName(router.query.name ? router.query.name.toString() : '');
  }, [router.isReady]);

  // 유저가 입력을 하고 있는지에 대한 상태를 관리하는 useEffect
  // 유저가 입력을 멈추면 디바운스가 동작하여 500ms 후에 상태를 false로 변경
  useEffect(() => {
    setIsUserInputActive(true);
    const debounce = setTimeout(() => {
      // 유저가 아무것도 입력하지 않았을때는 상태를 false로 변경하지 않음
      if (tilName !== '') setIsUserInputActive(false);
    }, 500);
    return () => clearTimeout(debounce);
  }, [tilName]);

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
      {!isUserInputActive && (
        <Styled.ResetButtonContainer onClick={() => handleResetSearch()}>
          <Image src="/assets/icons/ic_closeButton.svg" alt="" width={30} height={30} />
        </Styled.ResetButtonContainer>
      )}
    </Styled.Root>
  );
};

export default SearchBar;
