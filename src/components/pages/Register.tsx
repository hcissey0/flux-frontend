import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return
    } else {
      const data = await register(
        firstName,
        lastName,
        username,
        email,
        password,
      );
      if (data?.error) {
        setError(data.error.message);
      } else {
        alert('Registered successfully.');
        navigate('/login');
      }

    }
    // const data = {
    //   firstName,
    //   lastName,
    //   username,
    //   email,
    //   password,
    // }
    setIsLoading(false);
    setFirstName('');
    setLastName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }
  return (
    <div className='w-full flex h-dvh justify-center'>
      <div className=' w-full '>
        <div className="2xl:w-1/2 w-4/5 mx-auto bg-base-100 p-4 py-8 rounded-3xl">
          <form onSubmit={handleSubmit}>
            <div className='text-center font-extrabold text-3xl mb-8'>
              <h1>Register</h1>
            </div>
            <div className='flex flex-col items-center gap-7 mb-4'>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input
                      type="text"
                      name='firstName'
                      className="grow"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required

                      />
                  </label>
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input
                      type="text"
                      name='lastName'
                      className="grow"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input
                      type="text"
                      name='username'
                      className="grow"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      />
                  </label>
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                    <input
                      type="email"
                      name='email'
                      className="grow"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      />
                  </label>
                </div>
              </div>
              <div className='flex flex-col gap-4 lg:flex-row'>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input
                      type="password"
                      name='password'
                      className="grow"
                      placeholder='Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      />
                  </label>
                </div>
                <div>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                    <input
                      type="password"
                      name='confirmPassword'
                      className="grow"
                      placeholder='Confirm Password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      />
                  </label>
                </div>
              </div>
            </div>
            <div className='mb-4 text-center text-sm'>
              <p className='text-red-500'>{error}</p>
              <p className=' text-neutral-600'>
                By clicking Register, you agree to
                our <Link to={'/terms'} className='btn btn-sm p-0 btn-link' >
                  Terms</Link> and <Link to={'/privacy'} className='btn btn-sm p-0 btn-link' >
                    Privacy Policy</Link>
              </p>
            </div>

            <div className='text-center mb-4'>
              <button
                type='submit'
                disabled={isLoading}
                className='btn btn-primary btn-md rounded-badge'
                >
                Register
              </button>
            </div>
            <div className='text-center'>
              <p>Already having an account? <Link to={'/login'} className='btn btn-sm p-0 btn-link' >Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
