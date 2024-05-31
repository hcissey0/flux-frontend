import { PostInterface } from '../../interfaces/post.interfaces'
import LikeButton from '../atoms/PostLikeButton'
import PostCommentButton from '../atoms/PostCommentButton'
import SaveButton from '../atoms/SaveButton'

const PostFooter = ({ post }: { post: PostInterface }) => {
  return (
    <div>
      <div className='p-2 m-4 mt-1 mb-1 rounded-bl-3xl w-full mx-auto bg-base-100 shadow-2xl'>
            <div className=''>
            <div className=" flex justify-around">
      <div>
        <LikeButton post={post}/>
      </div>
      <div>
        <PostCommentButton post={post} />
      </div>
      <SaveButton post={post} />
    </div>
            </div>
        </div>
    </div>
  )
}

export default PostFooter

