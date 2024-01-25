import GoogleIcon from 'src/components/icons/GoogleIcon';
import styled from 'styled-components';
import ContinueGoogleIcon from '../icons/ContinueGoogleIcon';

function ContinueGoogle() {
  return (
    <GoogleButton className="mt-[8px] flex gap-3 justify-center items-center w-full h-[48px] border-2 border-indigo-600 rounded-[10px]">
      <GoogleIcon />
      {/* <span className="text-[#1f1f1f] font-semibold text-[0.815rem]">
        Continue with Google
      </span> */}
      <ContinueGoogleIcon />
    </GoogleButton>
  );
}

export default ContinueGoogle;

const GoogleButton = styled.button`
  border: 1px solid var(--black-300)
`;
