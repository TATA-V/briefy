import { ChangeEvent } from 'react'
import styled from 'styled-components'
import {
  Button, Input, Interest, ArticleCard, NewsLetterCard,
} from 'briefy-storybook'

function MainPage() {
  return (
    <>
      <h1 className="text-3xl text-primary font-[600] underline">
        Hello world!
      </h1>
      <StyledDiv>
        test
      </StyledDiv>
      <NewsLetterCard
        title="뉴닉"
        category="경제"
        description="시간이 없어도 세상은 궁금하니까! 세상 돌아가는 소식을 쉽고 재미있게 받아보세요"
        onClick={() => alert('뉴스레터')}
      />
      <ArticleCard
        data={{
          category: ['뉴닉', '경제'],
          title: '이스라엘-팔레스타인 하마스 전쟁 (8) : 지상편과 휴전',
          src: 'https://ifh.cc/g/t5Z7ol.jpg',
          percent: '75%',
        }}
        mode="unread"
        onClick={() => alert('클릭!')}
      />
      <Interest title="비지니스" onClick={(title: string) => alert(title)} />
      <Button
        onClick={() => alert('오!')}
        title="브리피로 구독하기"
        size="medium"
        mode="lineBlue"
      />
      <Input
        type="text"
        mode="red"
        placeholder="타이틀 입력"
        // eslint-disable-next-line no-console
        onChange={(e: ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
      />
    </>
  )
}

export default MainPage

const StyledDiv = styled.div`
  color: red;
`
