import * as React from 'react'
import { MyButton } from './MyButton'

const handleClick = () => {
  alert('Hello, World!')
}

export const HelloWorld: React.FC = () => {
  return (
    <div>
      <MyButton label="Push me!" onClick={handleClick}></MyButton>
    </div>
  )
}
