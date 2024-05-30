import { Link } from 'react-router-dom'
import SearchBox from '../atoms/SearchBox'


const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 rounded-badge mb-5 shadow-2xl">
  <div className="flex-1">
    <a className="btn btn-ghost rounded-badge text-3xl" href='/'>Flux</a>
  </div>
  <div className="flex-none gap-2">
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
        <li><Link to={'/logout'}>Logout</Link></li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default NavBar
