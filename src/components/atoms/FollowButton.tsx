import { PostInterface } from '../../interfaces/post.interfaces';
import { useAuth } from '../../hooks/useAuth';

const FollowButton = ({ post }: { post: PostInterface }) => {
  const { user } = useAuth();


  return (
    <div>
        {user?._id !== post.author._id && <button role='btn' className="btn btn-ghost rounded-full">
        {user?.following?.includes(post.author._id as string) ?
        <svg className='w-5 h-5' fill='currentColor' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.984 29.992l0-2.029c0-0.795 0.597-1.045 0.835-1.154l8.783-4.145c0.63-0.289 1.064-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.335-3.046-7.287v-4.997c0-2.090 3.637-4.995 7.004-4.995 3.396 0 6.998 2.861 6.998 4.995v4.997c0 1.924-0.8 5.604-2.945 7.293-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l5.070 2.414 1.192-1.69-5.427-2.542c2.771-2.18 3.708-6.464 3.708-8.865v-4.997c0-3.31-4.582-6.995-8.998-6.995s-9.004 3.686-9.004 6.995v4.997c0 2.184 0.997 6.601 3.793 8.847l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h19.991l-1.625-2zM31.632 22.61c-0.434-0.341-1.064-0.264-1.404 0.171l-4.276 6.522-2.658-2.659c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.023 0 1.414l3.535 3.535c0.39 0.39 1.023 0.39 1.414 0 0.095-0.095 0.166-0.204 0.215-0.322l4.759-7.259c0.34-0.434 0.263-1.063-0.172-1.403z"></path>
    </svg> :
    <svg className='w-5 h-5' fill='currentColor' viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.002 27.959c0-0.795 0.597-1.044 0.835-1.154l8.783-4.145c0.63-0.289 1.064-0.885 1.149-1.573s-0.193-1.37-0.733-1.803c-2.078-1.668-3.046-5.334-3.046-7.287v-4.997c0-2.090 3.638-4.995 7.004-4.995 3.396 0 6.997 2.861 6.997 4.995v4.998c0 1.924-0.8 5.604-2.945 7.292-0.547 0.43-0.831 1.115-0.749 1.807 0.082 0.692 0.518 1.291 1.151 1.582l2.997 1.422 0.494-1.996-2.657-1.243c2.771-2.18 3.708-6.463 3.708-8.864v-4.997c0-3.31-4.582-6.995-8.998-6.995s-9.004 3.686-9.004 6.995v4.997c0 2.184 0.997 6.602 3.793 8.846l-8.783 4.145s-1.998 0.89-1.998 1.999v3.001c0 1.105 0.895 1.999 1.998 1.999h21.997v-2l-21.996 0.001v-2.029zM30.998 25.996h-3v-3c0-0.552-0.448-1-1-1s-1 0.448-1 1v3h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1h3v3c0 0.552 0.448 1 1 1s1-0.448 1-1v-3h3c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
</svg>
      }
      </button>}

    </div>
  )
}

export default FollowButton