import { Link } from 'react-router-dom'
import SearchBox from '../atoms/SearchBox'
import { useLocalStorage } from '../../hooks/useLocalStorage'



const NavBar = () => {
  const [user, setUser] = useLocalStorage('user', null);
  const [token, setToken] = useLocalStorage('flux-token', null);

  token;
  user;

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    window.location.href = '/login'
  }
  return (

      <div className="navbar max-w-screen-md glass fixed rounded-badge mb-5 shadow-2xl">
        <div className="flex-auto">
          <a className="btn btn-ghost rounded-badge text-3xl" href='/'>Flux</a>
        </div>
        <div className="flex-none gap-2 mr-4">
        <div>
          <SearchBox />
        </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">

                <img src={'/assets/images/user2.png'} alt='avatar'/>

              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <Link to={'/profile'} className="justify-between">
                  Profile
                  <span className="badge badge-warning">New</span>
                </Link>
              </li>
              <li><Link to={'/settings'}>Settings</Link></li>
              <li>
                <button onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default NavBar
