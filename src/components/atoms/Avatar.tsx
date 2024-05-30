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
    src = '/assets/images/user2.png',
    alt = 'avatar',
    height = 50,
    width = 50
}: Props) => {


  return (
    <div className=''>
      <div className='flex gap-2'>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">

          <img src={src} height={height} width={width} alt={alt}/>

        </div>
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

