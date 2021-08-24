import * as React from "react"
import { Link } from "gatsby"
import GlobalStyles from "../GlobalStyles/GlobalStyles"

const Layout = ({ location, title, children }) => {


  return (
    <div className="">
      <GlobalStyles/>
      <main>{children}</main>
    
    </div>
  )
}

export default Layout
