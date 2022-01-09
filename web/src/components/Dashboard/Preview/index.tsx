import { Container } from "./style"
import plusImg from '../../../assets/plus.svg'
import { ReactNode } from "react"

interface PreviewProps {
  title:string,
  children:ReactNode
}

export const Preview = ({title, children}: PreviewProps) => {
  return (
    <Container>
      <header>
        <h3>{title}</h3>
        <div>
          <img src={plusImg} alt='plus' />
        </div>
      </header>
      {
        children
      }
    </Container>
  )
}