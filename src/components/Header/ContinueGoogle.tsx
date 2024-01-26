import GoogleIcon from 'src/components/icons/GoogleIcon';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ContinueGoogleIcon from '../icons/ContinueGoogleIcon';

function ContinueGoogle() {
  return (
    <GoogleNavLink to="/interest" className="flex gap-3 justify-center items-center w-full h-[48px] border-2 border-indigo-600 rounded-[10px]">
      <GoogleIcon />
      <ContinueGoogleIcon />
    </GoogleNavLink>
  );
}

export default ContinueGoogle;

const GoogleNavLink = styled(NavLink)`
  border: 1px solid var(--black-300)
`;
