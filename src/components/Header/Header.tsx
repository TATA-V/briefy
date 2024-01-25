import { NavLink } from 'react-router-dom';
import Logo from 'src/components/icons/Logo';
import SearchIcon from 'src/components/icons/SearchIcon';
import User from 'src/components/Header/User';

function Header() {
  return (
    <>
      <header className="w-full h-[120px] flex justify-between items-center">
        <div className="w-[75px] h-[22px]" />

        <NavLink to="/" className="w-[112px] h-[35px] text-primary">
          <Logo />
        </NavLink>

        <div className="flex justify-between items-center w-[75px] h-[22px]">
          <User />
          <div className="cursor-pointer w-[21.52px] h-[21.52px] text-balck900">
            <SearchIcon />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
