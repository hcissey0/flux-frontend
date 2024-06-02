import React from 'react'
import { ChatInterface } from '../../interfaces/chat.interfaces'

const ChatWindow = ({ selectedChat, setSelectedChat}: {
    selectedChat: ChatInterface | null,
    setSelectedChat: (chat: ChatInterface | null) => void
}) => {
  return (
    <div className={
        "p-3 md:flex md:flex-[4] h-auto card bg-base-300 flex-auto rounded-box "
        + (selectedChat ? 'flex' : 'hidden')
    }>
        <button className={'btn ' + (selectedChat? '': 'hidden')} onClick={()=>setSelectedChat(null)}>
          Back
        </button>
        {!selectedChat && <div>no chat selected</div>}
        {selectedChat?.name}
      </div>
  )
}

export default ChatWindow
