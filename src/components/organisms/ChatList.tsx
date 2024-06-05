import { useAuth } from '../../hooks/useAuth'
import { ChatInterface } from '../../interfaces/chat.interfaces'
import { UserInterface } from '../../interfaces/user.interfaces';
import Avatar from '../atoms/Avatar';

const ChatList = ({ selectedChat, chats, setSelectedChat }: {
    selectedChat: ChatInterface | null,
    chats: ChatInterface[],
    setSelectedChat: (chat: ChatInterface | null) => void
}) => {
  console.log('selected ', selectedChat)
  const { user } = useAuth();

  return (
    <div className={
        "p-3 md:flex md:flex-[2] h-auto card bg-base-300 flex-auto rounded-box "
        + (selectedChat ? 'hidden' : 'md:flex')
        }>
          {
            chats.length ?
            // If a chat is present list it in the chat list
              chats.map((chat) =>
                <div key={chat._id} >
                  <div role='button'
                    onClick={() => setSelectedChat(chat)}
                    className='btn btn-ghost rounded-badge flex justify-between w-full text-start  my-2'>
                    <div className='flex gap-2 items-center'>
                      {
                        chat.isGroup ?
                        // if the chat is a group chat, make the avatar a group avatar
                        <div className='avatar-group -space-x-7 rtl:space-x-reverse'>
                          {
                            chat.participants.length < 3 ?
                              // if the participants are less than 3 just display the avatar group
                              chat.participants.map(
                                (participant) =>
                                <Avatar link={false} w='8' user={participant} key={participant._id} />
                              )
                              :
                              // if participants are more than 3 display 3 avatare group and add +{number of the rest of participants}
                              <>
                                {chat.participants.slice(0, 3).map(
                                  (participant) =>
                                  <Avatar link={false} w='8' user={participant} key={participant._id} />
                                )}
                                <div className="avatar placeholder">
                                  <div className="w-8 bg-neutral text-neutral-content">
                                    <span>+{chat.participants.length - 3}</span>
                                  </div>
                                </div>
                              </>
                          }
                        </div>
                        :
                        // if chat is not a group chat just display one avatar
                        // filters for the avatar of the admin who is not the current user
                        <Avatar link={false} user={chat.admins.find((val) => val._id != user._id)}  />
                      }
                <div>
                  {
                    chat.name ?
                      // if there's is a chat name meaning it's a group
                      // use the chat name as the title
                      chat.name
                      :
                      // if there's no chat name use the first name and last name of the participant who is not the current user
                      (
                        () => {
                          const other = chat.participants.find((val) => val._id !== user._id);
                          return other?.firstName + ' ' + other?.lastName;
                        }
                      )()
                  }
                </div>
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
