import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { themes } from 'src/assets/themes/themes'

interface Props {
  type: string;
  mode: string;
  placeholder: string;
  onChange: () => void;
}

function Input({
  type, mode, placeholder, onChange,
} : Props) {
  const [color, setColor] = useState<string[]>([])

  useEffect(() => {
    switch (mode) {
      case 'blue':
        setColor([themes.colors.white, themes.colors.primary])
        return
      case 'red':
        setColor([themes.colors.white, themes.colors.warning])
        return
      case 'gray':
        setColor([themes.colors.white, themes.colors.black300])
        return
      case 'gray2':
        setColor([themes.colors.black100, themes.colors.black300])
        return
      default:
        setColor([themes.colors.white, themes.colors.primary])
    }
  }, [mode])

  return (
    <StyledInput $color={color} type={type} onChange={onChange} placeholder={placeholder} />
  )
}

export default Input

interface IColor {
  $color: string[]
}
const StyledInput = styled.input<IColor>`
  border: 1px solid ${({ $color }) => $color[1]};
  caret-color: ${({ $color }) => $color[1]};
  background-color: ${({ $color }) => $color[0]};

  width: 358px;
  height: 48px;
  color: #1C1C1E;
  font-size: 0.874rem;
  font-weight: 400;
  border-radius: 8px;
  padding: 17px 0 17px 12px;
  outline: none;

  &::placeholder {
    color: #B3B4B9;
  }
`
