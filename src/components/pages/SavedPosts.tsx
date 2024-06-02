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

    const deletePost = async (postId:string) => {
      const data = await Api.deletePost(token, postId);
      if (data.error) {
        alert(data.error.message);
      } else {
        setPosts(posts.filter((value) => value._id !== postId));
      }
    }

    const editPost = async (postId:string, text:string) => {
      const data = await Api.editPost(token, postId, text);
      if (data.error) {
        alert(data.error.message);
      } else {
        posts.map((post) => {
          if (post._id === postId) {
            post.edited = true;
            post.text = text;
          }
        })
        setPosts(posts);
      }
    }

  return (
    <div>
      <h1 className='text-center text-4xl font-bold'>Your Saved Posts</h1>

      <div className='mx-auto'>
        {isLoading && <Loader />}
        {!isLoading && posts.length === 0 && <p className='text-center mt-5'>No saved posts</p>}
        {posts.map((post) => <PostCard key={post._id} deletePost={deletePost} editPost={editPost} post={post} />)}
      </div>
    </div>
  )
}

export default SavedPosts
