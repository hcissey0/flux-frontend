import { useAuth } from '../../hooks/useAuth'
import { ChatInterface } from '../../interfaces/chat.interfaces'

const ChatList = ({ selectedChat, chats, setSelectedChat }: {
    selectedChat: ChatInterface | null,
    chats: ChatInterface[],
    setSelectedChat: (chat: ChatInterface | null) => void
}) => {
  const { user } = useAuth();

  return (
    <div className={
        "p-3 md:flex md:flex-[2] h-auto card bg-base-300 flex-auto rounded-box "
        + (selectedChat ? 'hidden' : 'md:flex')
        }>
          {chats.length ? chats.map((chat) => <div key={chat._id} >
            <div role='button'
            onClick={() => setSelectedChat(chat)}
            className='btn btn-ghost rounded-bo flex justify-between w-full text-start  my-2'>
              <div className='flex gap-2 items-center'>
                <div className=''>
                  <div className="w-8 rounded-full">
                    <img src={'/assets/images/user2.png'} alt='avatar'/>
                  </div>
                </div>
                <div>{chat.name ?
                  chat.name :
                  chat.participants.find((val) => val._id !== user._id)?.firstName}</div>
              </div>
              <div>
                {'>'}
              </div>
            </div>
          </div>)  :
          <div className='flex flex-1 justify-center items-center'>
            <p className='text-lg'>No chats</p>
          </div>
          }
      </div>
  )
}

export default ChatList
