import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Loader from '../atoms/Loader';


const Login = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await login(username, password);
    console.log(response)
    if (response?.error) {
      setError(response?.error?.message);
      console.log(response);
    } else {
      navigate('/');
    }
    setIsLoading(false);
    setUsername('');
    setPassword('');
  };
  return (
    <div className='w-full flex justify-center h-dvh '>
      <div className=' w-full '>
        <div className="2xl:w-1/2 w-4/5 mx-auto bg-base-100 p-4 py-8 rounded-3xl">
          <form onSubmit={handleSubmit}>

          <div className='text-center font-extrabold text-3xl mb-8'>
            <h1>Login</h1>
          </div>

            <div className='flex flex-col items-center gap-7 mb-4 lg:flex-row justify-center'>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                  <input
                    type="text"
                    className="grow"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required/>
                </label>
              </div>
              <div>
                <label className="input input-bordered flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                  <input
                    type="password"
                    className="grow"
                    name="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required/>
                </label>
              </div>
            </div>
                <div className='text-center mt-3'>
                  {isLoading && <Loader />}
                  {<p className='text-red-500 text-center'>{error}</p>}
                </div>
            <div className='text-center mb-4'>
              <button
                type='submit'
                className='btn btn-primary btn-md rounded-badge'
                disabled={isLoading}
                >
                Login
              </button>
            </div>
            <div className='text-center'>
              <p>Don&apos;t have an account? <Link to={'/register'} className='btn btn-sm p-0 btn-link' >Register</Link></p>
            </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
