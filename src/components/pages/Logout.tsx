import { Navigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const Logout = () => {
    const [user, setUser] = useLocalStorage('user', null);
    const [token, setToken] = useLocalStorage('flux-token', null);
    user;
    token;
    setUser(null);
    setToken(null);
  return <Navigate to={'/login'} />
}

export default Logout

