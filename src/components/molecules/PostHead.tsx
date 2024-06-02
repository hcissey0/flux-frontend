import Avatar from '../atoms/Avatar'
import { PostInterface } from '../../interfaces/post.interfaces'
import TimeDisplay from '../atoms/TimeDisplay'


const PostHead = ({ post }: { post: PostInterface }) => {
  return (

        <div className='flex gap-4'>
          <Avatar post={post} />
          <div className='flex items-center text-start text-sm opacity-50'>
            <TimeDisplay timestamp={post.createdAt} />
          </div>
        </div>

  )
}

export default PostHead
