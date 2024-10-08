import { NewsLetterCard } from 'briefy-design';
import { SwiperSlide } from 'swiper/react';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@reactuses/core';
import { useNavigate } from 'react-router-dom';
import { SwiperData } from 'src/types/swiper';

import DefaultSwiper from 'src/components/Swiper/DefaultSwiper';
import TitleAndPrevNextbtn from 'src/components/Swiper/TitleAndPrevNextbtn';

interface Props {
  title?: ReactNode;
  num?: number;
}

function NewsLetterSwiper({ title, num = 20 } : Props) {
  const [swiperData, setSwiperData] = useState<SwiperData>({ slidesPerView: 3, spaceBetween: 24, lastIdx: num - 3 });
  const [swiperIndex, setSwiperIndex] = useState(0);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const { width } = useWindowSize();
  useEffect(() => {
    if (width < 768) {
      setSwiperData({ slidesPerView: 1.5, spaceBetween: 16, lastIdx: num - 2 });
      return;
    }
    if (width < 1240) {
      setSwiperData({ slidesPerView: 2.5, spaceBetween: 16, lastIdx: num - 2 });
      return;
    }
    if (width >= 1240) {
      setSwiperData({ slidesPerView: 3, spaceBetween: 24, lastIdx: num - 3 });
    }
  }, [width]);

  const handleSlideChange = (idx: number) => {
    setSwiperIndex(idx);
  };

  const titleAndPrevNextbtnProps = { title, swiperIndex, swiperData, prevRef, nextRef };

  return (
    <section>
      {title && <TitleAndPrevNextbtn {...titleAndPrevNextbtnProps} />}

      <div className="flex justify-center pt-[16px]">
        <div className="w-full">
          <DefaultSwiper swiperData={swiperData} handleSlideChange={handleSlideChange}>
            {[...Array(num)].map((_, idx) => (
              <SwiperSlide key={`newsletter${idx}`}>
                <NewsLetterCard
                  src="https://nabxomdrieosmaactvvc.supabase.co/storage/v1/object/public/briefy/snow.jpeg"
                  title={`뉴닉 ${idx + 1}`}
                  category="경제"
                  description="시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요"
                  onClick={() => navigate(`/news/${'business'}/${idx + 1}`)}
                />
              </SwiperSlide>
            ))}
            <button ref={prevRef} className="swiper-button-prev" />
            <button ref={nextRef} className="swiper-button-next" />
          </DefaultSwiper>
        </div>
      </div>
    </section>
  );
}

export default NewsLetterSwiper;
