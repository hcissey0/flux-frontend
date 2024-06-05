import { PlusIcon } from '@heroicons/react/16/solid'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { UserInterface } from '../../interfaces/user.interfaces';
import Api from '../../utils/api';
import { ChatInterface } from '../../interfaces/chat.interfaces';
import Avatar from './Avatar';

const FAB = ({ chats, setChats }: {
  chats: ChatInterface[],
  setChats: (chats: ChatInterface[]) => void
}) => {

  const [users, setUsers] = useState<UserInterface[]>([]);
  const [displayUsers, setDisplayUsers] = useState<UserInterface[]>(users);
  const [selectedUsers, setSelectedUsers] = useState<UserInterface[]>([])
  const [searchName, setSearchName] = useState('');
  const [name, setName] = useState('')
  const [isFull, setIsFull] = useState(false);
  const [isGroup, setIsGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token, user } = useAuth();

  const handleClick = async () => {
    document.getElementById('chat_create_modal')?.showModal()
    const data = await Api.getUsers(token);
      if (data.error) {
        alert(data.error.message);
      } else {
        setUsers(data.users as UserInterface[]);
        setDisplayUsers((data.users as UserInterface[]).filter((val) => val._id !== user._id));
      }

  }
  // useEffect(() => {
  //   async function func() {
  //     const data = await Api.getUsers(token);
  //     if (data.error) {
  //       alert(data.error.message);
  //     } else {
  //       setUsers(data.users as UserInterface[]);
  //       setDisplayUsers(data.users as UserInterface[]);
  //     }
  //   }
  //   func()
  // }, [])

  useEffect(() => {
    if (!isGroup) {
        setSelectedUsers([])
    }
  }, [isGroup])

    const handleUserSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        setDisplayUsers(users.filter((user) => {
          if (
            user.username.toLowerCase().includes(val.toLowerCase()) ||
            user.firstName.toLowerCase().includes(val.toLowerCase()) ||
            user.lastName.toLowerCase().includes(val.toLowerCase()) ||
            user.firstName.toLowerCase().concat(user.lastName.toLowerCase()).includes(val.toLowerCase().replace(' ', ''))) {
            return true;
          }
        }));
      }

      const handleSelect = (selectedUser: UserInterface) => {
          if (!selectedUsers.find((val) => val._id === selectedUser._id)) {
            setSelectedUsers([...selectedUsers, selectedUser]);
            setDisplayUsers(displayUsers.filter((val) => val._id !== selectedUser._id))
          }
          if (!isGroup && selectedUsers.length <= 2) {
            setIsFull(true);
          }
      }

      const handleCreate = async () => {
        if (selectedUsers.length === 0) {
          alert('Please select at least one user');
          return;
        }
        if (isGroup && name.length === 0) {
          alert('Please enter Group name');
          return;
        }
        setIsLoading(true);
        const participantIds = selectedUsers.map((val) => val._id);
        const data = await Api.createChat(token, participantIds, name, isGroup);
        if (data.error) {
          alert(data.error.message);
          console.log('data', data)
        } else {
            alert('Chat created');
            setChats([...chats, data.chat as ChatInterface]);
            document.getElementById('chat_create_modal')?.close();
        }
        setIsLoading(false);
        setSelectedUsers([]);
        setName('')
        setIsFull(false);
        setIsGroup(false);
      }

      const handleRemove = (selectedUser: UserInterface) => {
        setSelectedUsers(selectedUsers.filter((val) => val._id !== selectedUser._id))
        setDisplayUsers([...displayUsers, selectedUser])
        if (selectedUsers.length <= 1) setIsFull(false);
        console.log(selectedUsers)
      }
  return (
    <>
        <button
        onClick={handleClick}
        className="z-10 btn btn-circle btn-primary fixed bottom-12 right-0 m-5">
      <PlusIcon className='size-7' />
      </button>
      <dialog id="chat_create_modal" className="modal modal-middle">
        <div className="modal-box">
          <h3 className='text-2xl font-bold'>Create Chat</h3>
          {/* <form method='dialog' className='text-end flex justify-between'>
            <div>
            </div>
            <button className='btn btn-sm rounded-badge btn-ghost hover:text-error'>close</button>
          </form> */}
          <div className='p-1'>
            <div className="">
              <label className="label cursor-pointer justify-start gap-7">
                <span className="label-text font-bold text-lg">Group Chat:</span>
                <input
                type="checkbox"
                // When
                // onClick={
                //   (e) => {

                //     setIsGroup(!isGroup);
                //     setIsFull(false);
                //   }
                // }
                onChange={
                  (e) => {
                    setIsGroup(e.target.checked)
                    setIsFull(false);
                  }
                }
                defaultChecked={isGroup}
                className="checkbox checkbox-primary" />
              </label>
            </div>
            {/*  */}
            <div hidden={!isGroup} className=''>
              <label htmlFor="" className="label cursor-pointer justify-start gap-7">
                <span className="label-text font-bold text-lg">Group name:</span>
                <input type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                  className='input input-bordered input-sm w-2/4 max-w-xs' />
              </label>
            </div>
            <div hidden={isFull}>
              <label className="label cursor-pointer justify-start gap-7">
                <span className="label-text font-bold text-lg">With:</span>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="">
                    <input type="text"
                      onChange={handleUserSearch}
                      className='input input-bordered input-sm w-2/4 max-w-xs' />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[100] menu p-2 shadow bg-base-200 rounded-box w-52 max-h-32 flex flex-col flex-nowrap overflow-auto ">
                    {displayUsers.length ? displayUsers.map((user) => <li key={user._id}>
                      <button
                        onClick={() => handleSelect(user)}
                        className='rounded-badge'>
                          <Avatar link={false} user={user} w='8' size='md' />
                          {user.firstName + " " + user.lastName}
                      </button>
                      </li>) : <li className='text-center'>No Users to show</li>}
                  </ul>
                </div>
              </label>
            </div>
            <div>
              <p className='font-bold text-lg pl-1'>{`Selected user${isGroup ? 's':''}:`}</p>
              <div>
                <ul className='max-h-32 flex justify-center overflow-auto flex-wrap gap-4'>
                  {selectedUsers.length ? selectedUsers.map((user) => <li key={user._id}>
                    <div className='flex bg-base-300 p-2 rounded-badge gap-5'>
                        <div className='flex items-center gap-2'>
                          <Avatar link={false} user={user} w='8' size='md' />
                            {user.firstName + " " + user.lastName}
                        </div>
                        <div>
                            <button onClick={()=>handleRemove(user)} className='btn btn-sm rounded-badge btn-ghost hover:text-error'>x</button>
                        </div>
                    </div>
                  </li>) : <p className='text-sm text-center'>{`No User${isGroup? 's':''} selected`}</p>}
                </ul>
              </div>
            </div>
            <div className='text-end mt-4'>
              <button
                disabled={isLoading}
                onClick={handleCreate}
                className='btn btn-sm rounded-badge btn-primary'>
                Create Chat
              </button>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-ghost rounded-badge hover:text-error">close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default FAB
