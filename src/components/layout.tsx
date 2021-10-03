import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import Footer from "./Footer"
import Nav from "./Nav"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { location, title, children } = props

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
