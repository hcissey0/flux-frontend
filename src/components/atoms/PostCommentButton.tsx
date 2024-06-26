import { useState } from 'react';
import { PostInterface } from '../../interfaces/post.interfaces'
import CommentModal from '../molecules/CommentModal';
import { CommentInterface } from '../../interfaces/comment.interfaces';
import Api from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';


const PostCommentButton = ({ post }: { post: PostInterface}) => {
    const [commentsNo, setCommentsNo] = useState(post.comments.length);
    const [comments, setComments] = useState<CommentInterface[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { token } = useAuth();

    const handleClick = async () => {
      document.getElementById(`post-${post._id}-modal`)?.showModal()
      setIsLoading(true);

      const data = await Api.getPostComments(token, post._id);

      if (data.error) {
          alert(data.error.message);
      } else {
          setComments(data.comments as CommentInterface[])
      }
      setIsLoading(false);
    }

    // useEffect(() => {
    //     async function func() {
    //         setIsLoading(true);
    //         const data = await Api.getPostComments(token, post._id);

    //         if (data.error) {
    //             alert(data.error.message);
    //         } else {
    //             setComments(data.comments as CommentInterface[])
    //         }
    //         setIsLoading(false);
    //     }
    //     func()
    // }, []);
  return (
    <div>
      <button
        onClick={handleClick}
        className="btn btn-sm btn-ghost rounded-full">
          {commentsNo}
          {commentsNo ?
          <svg className='w-5 h-5' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13.5C13.9142 14.75 14.25 14.4142 14.25 14C14.25 13.5858 13.9142 13.25 13.5 13.25H8ZM7.25 10.5C7.25 10.0858 7.58579 9.75 8 9.75H16C16.4142 9.75 16.75 10.0858 16.75 10.5C16.75 10.9142 16.4142 11.25 16 11.25H8C7.58579 11.25 7.25 10.9142 7.25 10.5Z"/>
          </svg> :
          <svg className='w-5 h-5' viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" strokeWidth="1.5"/>
            <path d="M8 10.5H16"  strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M8 14H13.5"  strokeWidth="1.5" strokeLinecap="round"/>
          </svg>}
      </button>
      <dialog id={`post-${post._id}-modal`} className="modal modal-bottom sm:modal-middle">
        <CommentModal
         post={post}
         comments={comments}
         setComments={setComments}
         isLoading={isLoading}
         setIsLoading={setIsLoading}
         commentsNo={commentsNo}
         setCommentsNo={setCommentsNo} />
      </dialog>
    </div>
  )
}

export default PostCommentButton
