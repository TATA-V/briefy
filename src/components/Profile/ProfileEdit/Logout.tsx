import { useDebounceFn } from '@reactuses/core';
import { Button } from 'briefy-design';
import { useNavigate } from 'react-router-dom';
import useToast from 'src/hook/useToast';

function Logout() {
  const navigate = useNavigate();
  const { successToast } = useToast();

  const { run: handleLogout } = useDebounceFn(() => {
    navigate('/', { replace: true });
    successToast('로그아웃 되었습니다.');
  }, 100);

  return (
    <div className="flex justify-center pb-[36px] md:pb-[120px]">
      <div className="w-full md:w-[358px]">
        <Button
          onClick={handleLogout}
          title="로그아웃"
          size="big"
          mode="lineBlue"
          mobileHeight="38px"
        />
      </div>
    </div>
  );
}

export default Logout;
