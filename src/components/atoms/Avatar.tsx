import { Link } from "react-router-dom";
import { PostInterface } from "../../interfaces/post.interfaces";

interface Props {
    post: PostInterface
    src?: string;
    alt?: string;
    height?: number;
    width?: number;
}

const Avatar = ({
  post,
}: Props) => {


  return (
    <div className=''>
      <div className='flex gap-2 items-center'>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <Link to={`/users/${post.author.username}`}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={'/assets/images/user2.png'} alt='avatar'/>
            </div>
          </div>
        </Link>
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
  )
}

export default Avatar

