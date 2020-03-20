import * as React from 'react'

interface Props {
  label: string,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const MyButton: React.FC<Props> = (props: Props) => {
  return (
    <button onClick={props.onClick}>{props.label}</button>
  )
}
