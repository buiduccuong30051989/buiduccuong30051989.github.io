import React, { Component } from "react"

import Sidebar from './sidebar'
import Content from './content'

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App