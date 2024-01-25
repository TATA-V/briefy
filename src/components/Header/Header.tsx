import { NavLink } from 'react-router-dom';
import Logo from 'src/components/icons/Logo';
import { useWindowSize } from '@reactuses/core';
import { useState } from 'react';

import User from 'src/components/Header/User';
import Search from 'src/components/Header/Search';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      <header className="w-full h-[120px] flex justify-between items-center">
        {!showSearch && (
          <>
            {width > 767 && <div className="w-[75px] h-[22px]" />}

            <NavLink to="/">
              <Logo />
            </NavLink>
          </>
        )}

        <div className={`flex items-center h-[22px] ${showSearch ? 'w-full' : 'w-[75px] justify-between'}`}>
          {!showSearch && <User />}
          <Search showSearch={showSearch} setShowSearch={setShowSearch} />
        </div>
      </header>
    </>
  );
}

export default Header;