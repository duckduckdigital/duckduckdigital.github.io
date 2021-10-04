import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import Footer from "./Footer"
import Nav from "./Nav"
import { Box } from "@chakra-ui/react"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { location, title, children } = props

  return (
    <Box backgroundColor={"black"}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
