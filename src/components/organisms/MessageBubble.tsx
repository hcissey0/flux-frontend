import React from 'react'
import { MessageInterface } from '../../interfaces/message.interfaces'
import { useAuth } from '../../hooks/useAuth'

const MessageBubble = ({ message, isGroup }: { message: MessageInterface, isGroup: boolean }) => {
    const { user } = useAuth();
  return (
      <div className={
        "chat " + (message.author._id === user._id ? 'chat-end' : 'chat-start')
      }>
        <div className={"chat-image avatar placeholder " + (isGroup ? '' : 'hidden')}>
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component" src="../../../assets/images/user2.png" />
            </div>
        </div>
        <div className="chat-header">
            {isGroup && message.author.firstName + " " + message.author.lastName + ' '}
            <time className="text-xs opacity-50">
                {new Date(message.createdAt).toLocaleTimeString()}
            </time>
        </div>
        <div className="chat-bubble">
            {message.text}
        </div>
            <div className="chat-footer opacity-50 text-xs">
                {message.author._id === user._id ? 'Sent': 'Received'}
            </div>
        </div>
  )
}

export default MessageBubble

