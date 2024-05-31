import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import PostCard from '../organisms/PostCard';
import Api from '../../utils/api';
import Loader from '../atoms/Loader';
import { PostInterface } from '../../interfaces/post.interfaces';


const Home = () => {
    const { user, token } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<PostInterface[]>([]);
    const [text, setText] = useState('');
    user;
    useEffect(() => {
      async function func() {
        setIsLoading(true);
        const data = await Api.getPosts(token);
        // console.log(data)
        if (data.error) {
          alert(data.error.message);
        } else {
          setPosts(data.posts as PostInterface[]);

        }
        setIsLoading(false);
      }
      func()
    }, []);

    const handleCreatePost = async () => {
      setIsLoading(true);
      const data = await Api.createPost(token, text);
      if (data.error) {
        alert(data.error.message);
      } else {
        posts.push(data.post as PostInterface)
        setPosts(posts)
      }
      setText('');
      setIsLoading(false);
    }
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex w-11/12 justify-center mb-4'>
        <div className="bg-base-100 w-11/12 rounded-full p-4 flex gap-7 px-7">
          <div className='flex-1'>
            <input
              type="text"
              name='text'
              value={text}
              placeholder="What's on your mind?"
              className="input input-bordered w-full rounded-full "
              onChange={(e) => setText(e.target.value)}
              />
          </div>
          <div>
            <button
              className="btn btn-primary btn-md rounded-badge"
              onClick={handleCreatePost}
              >
                {"Create a Post"}
            </button>
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
      <div className='w-full'>
        {posts.length ?
        posts.map((post) => <PostCard key={post._id} post={post} />) :
        (!isLoading && <p className='text-center'> No outstanding posts</p>)}
      </div>
    </div>
  )
}

export default Home

