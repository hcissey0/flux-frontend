import { ChatInterface } from '../../interfaces/chat.interfaces'

const ChatList = ({ selectedChat, chats, setSelectedChat }: {
    selectedChat: ChatInterface | null,
    chats: ChatInterface[],
    setSelectedChat: (chat: ChatInterface | null) => void
}) => {
  return (
    <div className={
        "p-3 md:flex md:flex-[2] h-auto card bg-base-300 flex-auto rounded-box "
        + (selectedChat ? 'hidden' : 'md:flex')
        }>
          {chats.map((chat) => <div key={chat._id} >
            <div role='button'
            onClick={() => setSelectedChat(chat)}
            className='btn btn-ghost rounded-bo flex justify-between w-full text-start p-3 mb-4'>
              <div className='flex gap-2'>
                <div>avatar</div>
                <div>{chat.name}</div>
              </div>
              <div>
                {'>'}
              </div>
            </div>
          </div>)
          }
      </div>
  )
}

export default ChatList
