import PostHead from '../molecules/PostHead'
import PostFooter from '../molecules/PostFooter'
import { PostInterface } from '../../interfaces/post.interfaces'
import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import FollowButton from '../atoms/FollowButton'

const PostCard = ({
  post, editPost, deletePost
}: {
  post: PostInterface,
  editPost: (postId:string, text:string) => void,
  deletePost: (postId:string) => void,
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(post.text);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = async () => {
    setIsLoading(true);
    await editPost(post._id, text)

    setIsLoading(false);
    setEditing(false);
  }

  const handleDelete = async () => {
    await deletePost(post._id);
  }

  return (
    <div>
        <div className="w-11/12 min-w-56 max-w-3xl mx-auto">
          <div className='p-4 m-4 mb-1 rounded-tr-3xl mx-auto bg-base-100 shadow-2xl'>
              <div className=''>
                <div>
                  <div className='flex justify-between items-center w-full'>
                    <PostHead post={post} />
                    {post.author._id === user._id ?
                    <div>
                      <div className='text-end text-xs pr-2 pt-1'>
                        {editing ?
                        <div className='flex justify-end items-center gap-3'>
                          <div>
                            <button
                              onClick={() => {
                                setEditing(false);
                                setText(post.text);
                              }}
                              className='btn btn-sm tn-ghost rounded-badge hover:text-error'>
                              X
                            </button>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <input
                            disabled={isLoading}
                            type="text"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            className="input input-bordered input-md w-full rounded-badge" />
                            <button
                              onClick={handleEdit}
                              disabled={isLoading}
                              className="btn btn-sm btn-primary rounded-badge">
                              edit
                            </button>
                          </div>
                        </div> :
                        <div>
                          <button
                          onClick={() => setEditing(true)}
                          className="btn btn-ghost btn-sm rounded-badge">
                          edit
                        </button>
                        <button
                          onClick={handleDelete}
                          className="btn btn-ghost btn-sm text-error rounded-badge">
                          delete
                        </button>
                        </div>
                      }
                      </div>
                    </div>:
                    <FollowButton post={post} />
                    }
                  </div>
                </div>
              </div>
          </div>
          <div className=" bg-base-100 shadow-2xl mx-auto">

            <div className="p-8 items-center text-center">
              <p className='break-words'>{text || "If a dog chews shoes whose shoes does he choose?"}</p>
            </div>
            {post.edited &&
            <div className='text-end pr-3 text-sm'>
              <span className='opacity-50'>edited</span>
            </div>}

          </div>
          <div>
            <PostFooter post={post} />
          </div>
        </div>
    </div>
  )
}

export default PostCard
