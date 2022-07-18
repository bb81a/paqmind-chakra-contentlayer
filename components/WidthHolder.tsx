import {Container} from "@chakra-ui/react"
import * as React from "react"

// WidthHolder
export type WidthHolderProps = {
  background?: string
  border?: string
  children: React.ReactNode
  main?: boolean
  maxW?: string
  position?: string
}

export function WidthHolder({background, border, children, main, maxW = "3xl", position}: WidthHolderProps): JSX.Element {
  return <>
    <Container
      background={background}
      border={border}
      height="100%"
      maxW={maxW}
      position={position as any}
      px="4rem"
      pt={main ? "2rem" : "2rem"}
      pb={main ? "2.5rem" : "2rem"}
    >
      {children}
    </Container>
  </>
}

