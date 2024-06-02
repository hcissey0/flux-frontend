import { useEffect, useState } from 'react'
import { ChatInterface } from '../../interfaces/chat.interfaces';
import ChatTabContent from '../organisms/ChatTabContent';
import Api from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
import FAB from '../atoms/FAB';

const Chat = () => {
  const [chats, setChats] = useState<ChatInterface[]>([]);
  const {token} = useAuth();


  useEffect(() => {
    async function func() {
      const data = await Api.getUserChats(token)
      if (data.error) {
        alert(data.error.message);
      } else {
        setChats(data.chats as ChatInterface[]);
      }
    }
    func();
  }, [])


  return (
    <div className=' '>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <FAB />
      <div role="tablist" className="tabs tabs-lifted tabs-lg ">
        <input
          type="radio"
          name="chat_tabs"
          role="tab"
          className="tab font-bold text-2xl"
          aria-label="Chats"
          defaultChecked/>
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div className='min-h-[35rem] flex flex-col'>
            <ChatTabContent chats={chats.filter((chat) => !chat.isGroup)} />
          </div>
        </div>

        <input
          type="radio"
          name="chat_tabs"
          role="tab"
          className="tab font-bold text-2xl"
          aria-label="Groups"
           />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
          <div className='min-h-[35rem] flex flex-col'>
            <ChatTabContent chats={chats.filter((chat) => chat.isGroup)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
