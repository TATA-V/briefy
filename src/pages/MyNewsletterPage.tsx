import { useState } from 'react';
import { Helmet } from 'react-helmet';
import FadeInLayout from 'src/components/Layout/FadeInLayout';
import CustomSelect from 'src/components/common/CustomSelect';
import InfiniteNewsLetter from 'src/components/common/InfiniteNewsLetter';

function MyNewsletterPage() {
  const [orderBy, setOrderBy] = useState('latest');
  const orderByList = [
    { value: 'subscribers', label: '구독 많은순' },
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
    { value: 'alphabet', label: '가나다순' },
  ];
  const customSelectProps = { orderBy, setOrderBy, list: orderByList };

  return (
    <>
      <Helmet>
        <meta property="og:description" content="사용자 뉴스레터" />
        <title>Briefy - 내 뉴스레터</title>
      </Helmet>
      <FadeInLayout>
        <h2 className="mt-[16px] md:mt-[40px] flex items-center h-[44px] md:h-[64px] text-base md:text-2xl text-black900 font-semibold">
          마이 뉴스레터
        </h2>
        <div className="flex justify-end">
          <CustomSelect {...customSelectProps} />
        </div>
        <div className="pt-[16px] md:pt-[24px] pb-[36px] md:pb-[132px]">
          <InfiniteNewsLetter />
        </div>
      </FadeInLayout>
    </>
  );
}

export default MyNewsletterPage;
