import { forwardRef, useCallback, useState } from 'react';
import Input from '@/components/common/Input';
import { useParamsToUrl } from '@/hooks/useParamsToUrl';
import * as Styled from './style';

interface SearchBarProps {}

const SearchBar = forwardRef<HTMLFormElement, SearchBarProps>((_, ref) => {
  const [tilName, setTilName] = useState<string>('');

  const { addParamsToUrl, deleteParamsFromUrl } = useParamsToUrl();

  const handleSearch = useCallback(
    (title: string) => {
      if (!tilName) deleteParamsFromUrl('title');
      addParamsToUrl({ title });
    },
    [tilName],
  );

  return (
    <Styled.Root
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(tilName);
      }}>
      <Input
        css={Styled.InputContainerStyles}
        inputStyles={Styled.InputStyles}
        placeholder="검색어를 입력하세요"
        endIcon="ic_search_2x"
        value={tilName}
        onChange={(e) => setTilName(e.target.value)}
        onClick={() => handleSearch(tilName)}
      />
    </Styled.Root>
  );
});

export default SearchBar;
