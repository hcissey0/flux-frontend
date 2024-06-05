import Avatar from '../atoms/Avatar'
import { PostInterface } from '../../interfaces/post.interfaces'
import TimeDisplay from '../atoms/TimeDisplay'
import { Link } from 'react-router-dom'


const PostHead = ({ post }: { post: PostInterface }) => {
  return (

        <div className='flex gap-4'>
          <div className=''>
            <div className='flex gap-2 items-center'>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <Avatar user={post.author} />
              </div>
                <div>
                    <div className='font-bold text-start p-0 m-0 text-xl'>
                        {post.author.firstName + " " + post.author.lastName}
                    </div>
                    <div role='btn' className='btn btn-xs btn-link p-0  text-start text-sm text-neutral-400'>
                        @{post.author.username}
                    </div>
                </div>
              </div>
            </div>
          <div className='flex items-center text-start text-sm opacity-50'>
            <TimeDisplay timestamp={post.createdAt} />
          </div>
        </div>

  )
}

export default PostHead
