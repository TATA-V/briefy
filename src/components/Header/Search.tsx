import { useClickOutside } from '@reactuses/core';
import SearchIcon from 'src/components/icons/SearchIcon';
import styled from 'styled-components';
import XIcon from 'src/components/icons/XIcon';
import { Dispatch, SetStateAction, useRef } from 'react';
import { fadeInFromRight } from 'src/styled/keyframes';

interface Props {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>
}

function Search({ showSearch, setShowSearch }: Props) {
  const searchRef = useRef<HTMLDivElement>(null);

  useClickOutside(searchRef, () => {
    setShowSearch(false);
  });

  return (
    <div ref={searchRef} className={`h-[120px] flex items-center ${showSearch && 'w-full justify-end'}`}>
      <div onClick={() => setShowSearch(true)} className="cursor-pointer">
        <SearchIcon />
      </div>

      {showSearch
        && (
          <SearchBox className="w-full flex items-center">
            <Input
              type="text"
              placeholder="검색어를 입력해 주세요"
              className="w-full ml-[25.23px] mr-[28px] h-[42px] rounded-[8px] pl-[12px] caret-primary text-[0.875rem] text-black placeholder:text-black500"
            />

            <button
              onClick={() => setShowSearch(false)}
              className="w-[16px] h-[16px] text-black900"
            >
              <XIcon />
            </button>
          </SearchBox>
        )}
    </div>
  );
}

export default Search;

const Input = styled.input`
  border: 1px solid var(--black-300);
  transition: all 0.15s ease-in-out;

  &:hover {
    border: 1px solid var(--black-500);
    outline: none;
  }
  &:focus {
    border: 1px solid var(--black-900);
    outline: none;
  }
`;

const SearchBox = styled.div`
  animation: ${fadeInFromRight} 0.18s linear;
`;
