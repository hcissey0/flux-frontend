import Avatar from '../atoms/Avatar'
import FollowButton from '../atoms/FollowButton'
import { PostInterface } from '../../interfaces/post.interfaces'
import TimeDisplay from '../atoms/TimeDisplay'


const PostHead = ({ post }: { post: PostInterface }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <Avatar post={post} />
          <div className='flex items-center text-start'>
            <TimeDisplay timestamp={post.createdAt as string} />
          </div>
        </div>
        <FollowButton post={post} />
      </div>
    </div>
  )
}

export default PostHead
