import { ChatInterface } from "../../interfaces/chat.interfaces"
import { useState } from "react"
import ChatList from "./ChatList"
import ChatWindow from "./ChatWindow"


const ChatTabContent = ({ chats }: { chats: ChatInterface[]}) => {
  const [selectedChat, setSelectedChat] = useState<ChatInterface | null>(null)


  return (
    <div className="flex w-full flex-col md:flex-row h-96 flex-auto">
      <ChatList selectedChat={selectedChat} setSelectedChat={setSelectedChat} chats={chats} />
      <div className="hidden md:divider md:divider-horizontal"></div>
      <ChatWindow selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
    </div>
  )
}

export default ChatTabContent

