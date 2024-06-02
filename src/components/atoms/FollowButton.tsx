import { PostInterface } from '../../interfaces/post.interfaces';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import Api from '../../utils/api';

const FollowButton = ({ post }: { post: PostInterface }) => {
  const { user, token } = useAuth();
  const [followed, setFollowed] = useState(post.author.followers.includes(user._id));
  const [followers, setFollowers] = useState(post.author.followers.length);

  const handleFollow = async () => {
    const data = await Api.followUser(token, post.author._id);
    if (data.error) {
      alert(data.error.message)
    } else {
      if (data.followed) {
        setFollowers(followers+1)
      } else {
        setFollowers(followers > 0 ? followers - 1: 0)
      }
      setFollowed(data.followed as boolean)
    }
  }
  return (
    <div>
        {<button
        onClick={handleFollow}
        role='btn' className={"btn rounded-full " + (followed ? "btn-outline": "btn-primary")}>
          {followers}
        {followed ?
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
        <path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 22C3.57038 20.0332 4.74795 18.2971 6.36438 17.0399C7.98081 15.7827 9.95335 15.0687 12 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 17.57L17.76 20.57L23 15.28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
         :
         <svg className='w-6 h-6' viewBox="0 0 24 24" stroke='currentColor' fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M12.1992 12C14.9606 12 17.1992 9.76142 17.1992 7C17.1992 4.23858 14.9606 2 12.1992 2C9.43779 2 7.19922 4.23858 7.19922 7C7.19922 9.76142 9.43779 12 12.1992 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M3 22C3.57038 20.0332 4.74795 18.2971 6.36438 17.0399C7.98081 15.7827 9.95335 15.0687 12 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M19 22V14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         <path d="M15 18H23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
      }
      </button>}

    </div>
  )
}

export default FollowButton
