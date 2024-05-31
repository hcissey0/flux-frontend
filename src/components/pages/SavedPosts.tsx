import React, { useEffect, useState } from 'react'
import { PostInterface } from '../../interfaces/post.interfaces'
import Api from '../../utils/api';
import { useAuth } from '../../hooks/useAuth';
import PostCard from '../organisms/PostCard';
import Loader from '../atoms/Loader';

const SavedPosts = () => {
    const { token } = useAuth();
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function func() {
            setIsLoading(true);
            const data = await Api.getSavedPosts(token);
            if (data.error) {
                alert(data.error.message);
            } else {
                setPosts(data.posts as PostInterface[])
            }
            setIsLoading(false);
        }
        func()
    }, [])

  return (
    <div>
      <h1 className='text-center text-4xl font-bold'>Your Saved Posts</h1>

      <div className='mx-auto'>
        {isLoading && <Loader />}
        {posts.length === 0 && <p className='text-center mt-5'>No saved posts</p>}
        {posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  )
}

export default SavedPosts
