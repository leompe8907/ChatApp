import React from 'react'
import SideBar from './SideBar'
import ChatArea from './ChatArea'
import withAuthentications from '../utils/withAuthentication'

function Home() {
  return (
    <>
      <SideBar/>
      <ChatArea/>
    </>

  )
}

export default withAuthentications(Home)
