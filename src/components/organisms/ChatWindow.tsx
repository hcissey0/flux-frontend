import { useEffect, useState } from 'react'
import { ChatInterface } from '../../interfaces/chat.interfaces'
import MessageBubble from './MessageBubble'
import { useAuth } from '../../hooks/useAuth'
import Api from '../../utils/api'
import { MessageInterface } from '../../interfaces/message.interfaces'
import Loader from '../atoms/Loader'

const ChatWindow = ({ selectedChat, setSelectedChat}: {
    selectedChat: ChatInterface | null,
    setSelectedChat: (chat: ChatInterface | null) => void
}) => {
  const { token } = useAuth();
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();


  useEffect(() => {
    if (!selectedChat) return;
    // console.log(selectedChat.participants);
    setIsLoading(true);
    async function func() {
      const data = await Api.getChatMessages(token, selectedChat?._id as string);
      if (data.error) {
        alert(data.error.message);
      } else {
        setMessages(data.messages as MessageInterface[]);
      }

    }
    func();
    setIsLoading(false);
  }, [selectedChat])

  const handleSend = async () => {
    setIsLoading(true);
    const data = await Api.sendMessage(token, selectedChat?._id as string, text)
    if (data.error) {
      alert(data.error.message);
    } else {
      messages.push(data.message as MessageInterface);
      setMessages(messages);
    }

    setIsLoading(false);
    setText('');
  }
  return (

    <div className={
        "p-3 md:flex md:flex-[4] overflow-auto h-auto card bg-base-300 flex-auto rounded-box "
        + (selectedChat ? 'flex' : 'hidden')
    }>

      {/* Header */}
      <div className={'items-center justify-between bg-base-100 rounded-badge ' + (selectedChat? 'flex': 'hidden')}>
        <button className='btn btn-ghost rounded-l-badge' onClick={()=>setSelectedChat(null)}>
          {'<'}
        </button>
        <div className=' flex-1 text-center '>
          <p>{selectedChat?.name ?
          selectedChat.name :
          selectedChat?.participants.find((val) => val._id !== user._id)?.firstName}</p>
        </div>
        <details className={`dropdown dropdown-end ${selectedChat?.isGroup ? '' : 'hidden'}`}>
          <summary className='btn btn-ghost rounded-r-badge'>
          {':'}
          </summary>

            {
              selectedChat?.admins.find((val) => val._id === user._id) ?
              <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                <li>
                  <button className='btn btn-ghost rounded-badge btn-sm'>
                    Add User
                  </button>
                </li>
              </ul>
            :
            <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
                <li>
                  <button className='btn btn-ghost rounded-badge btn-sm'>
                    Leave Group
                  </button>
                </li>
              </ul>
            }
        </details>
      </div>

        {/* Body */}

        {
        selectedChat ?
          (
            messages.length ?
              (<div className='overflow-auto scroll-auto flex-1'>
                {messages.map((message) =>
                <div key={message._id} className=''>
                  <MessageBubble message={message} isGroup={selectedChat.isGroup} />
                </div>)}
            </div>
              )
                : <div className='flex-1 flex justify-center items-center'>
                  No Messages
                </div>
          )
                : (<div className='flex-1 flex justify-center items-center'>
                    <p className='text-lg'>No chat selected</p>
                  </div>)
        }

          {/* Footer */}
        <div className={'justify-between gap-4 ' + (selectedChat? 'flex': 'hidden')}>
          <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={(e) => {setText(e.target.value)}}
          placeholder='Type a message...'
          className="input input-md input-bordered rounded-badge flex-1" />
          <button
          onClick={handleSend}
          disabled={isLoading}
          className="btn btn-primary rounded-badge">
            {"Send >"}
          </button>
        </div>
      </div>
  )
}

export default ChatWindow
