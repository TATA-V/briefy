import { Interest, Button } from 'briefy-design';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InterestPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const isEmpty = selected.length === 0;
  const navigate = useNavigate();

  const handleInterest = (title: string) => {
    const isSelected = selected.includes(title);
    if (isSelected) {
      const newSelected = selected.filter((item) => item !== title);
      setSelected(newSelected);
      return;
    }
    setSelected([...selected, title]);
  };

  const interestList = ['비즈니스', '기술', '건강', '엔터테이먼트', '스포츠', '환경', '과학', '여행', '미디어', '푸드'];

  return (
    <div className="flex flex-col items-center pt-[50px]">
      <div className="text-center text-black900">
        <div className="text-[1.75rem]">
          <span className="font-[600]">홍길동</span>&nbsp;
          <span className="font-[300]">님, 관심있는 분야를 선택해주세요!</span>
        </div>
        <div className="mt-[8px] text-[1.25rem] font-[300]">
          회원님이 좋아하실 만한 뉴스레터를 추천해 드릴게요.
        </div>
      </div>

      <div className="pt-[80px] pb-[108px] w-[728px] grid grid-cols-5 gap-8">
        {interestList.map((item, idx) => (
          <Interest key={idx} title={item} onClick={(title: string) => handleInterest(title)} />
        ))}
      </div>

      <div className="pb-[70px]">
        <Button
          onClick={() => navigate('/')}
          title="브리피 시작하기"
          size="big"
          mode={isEmpty ? 'disabled' : 'blue'}
        />
      </div>
    </div>
  );
}

export default InterestPage;
