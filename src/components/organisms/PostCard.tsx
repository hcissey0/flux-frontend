import PostHead from '../molecules/PostHead'
import PostFooter from '../molecules/PostFooter'
import { PostInterface } from '../../interfaces/post.interfaces'

const PostCard = ({ post }: { post: PostInterface }) => {
  return (
    <div>
        <div className="w-11/12 min-w-56 max-w-3xl mx-auto">
          <div className='p-4 m-4 mb-1 rounded-tr-3xl mx-auto bg-base-100 shadow-2xl'>
              <div className=''>
                  <PostHead post={post} />
              </div>
          </div>
          <div className=" bg-base-100 shadow-2xl mx-auto">
            <div className="p-10 items-center text-center">
              <p>{post?.text || "If a dog chews shoes whose shoes does he choose?"}</p>
            </div>
          </div>
          <div>
            <PostFooter post={post} />
          </div>
        </div>
    </div>
  )
}

export default PostCard
