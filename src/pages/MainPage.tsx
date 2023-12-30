import { ChangeEvent } from 'react'
import { Button, Input } from '@ui'
import Interest from 'src/components/common/Interest'

function MainPage() {
  return (
    <>
      <h1 className="text-3xl text-primary font-[600] underline">
        Hello world!
      </h1>
      <Interest />
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
