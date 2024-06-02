import React, { useState } from "react";


const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/3 bg-gray-100 p-4">
        <ChatList setSelectedChat={setSelectedChat} />
      </div>
      <div
        className={`w-full lg:w-2/3 bg-white p-4 ${
          selectedChat ? "block" : "hidden lg:block"
        }`}
      >
        <ChatWindow chat={selectedChat} />
      </div>
    </div>
  );
};

const chats = [
    { id: 1, name: "Chat 1" },
    { id: 2, name: "Chat 2" },
    { id: 3, name: "Chat 3" },
    { id: 4, name: 'chat 4'}
  ];

  const ChatList = ({ setSelectedChat }) => {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Chats</h2>
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => setSelectedChat(chat)}
            >
              {chat.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ChatWindow = ({ chat }) => {
    if (!chat) {
      return <div>Select a chat to start messaging</div>;
    }

    return (
      <div>
        <h2 className="text-xl font-bold mb-4">{chat.name}</h2>
        <div className="border p-4">
          <p>This is the chat window for {chat.name}.</p>
        </div>
      </div>
    );
  };


export default ChatApp;
