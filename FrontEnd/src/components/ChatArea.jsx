import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import withAuthentications from '../utils/withAuthentication'

function ChatArea() {
  return (
    <div className='chat-area'>
      <div className='chat-header'>

      </div>
      <div className="messages">
        <Message text="y entonces" sent/>
        <Message text="y entonces, entonces pelea" received/>
      </div>
      <MessageInput/>
    </div>
  )
}
export default  withAuthentications(ChatArea)