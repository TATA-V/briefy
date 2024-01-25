import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[1240px] px-5">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
