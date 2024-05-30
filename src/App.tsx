import { ReactNode } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import { useAuth } from './hooks/useAuth';
import NotFound from './components/pages/NotFound';
import NavBar from './components/molecules/NavBar';
import BottomNav from './components/molecules/BottomNav';
import Logout from './components/pages/Logout';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }
  return <>{children}</>;
}

function App() {
  const { user } = useAuth();

  return (
    <>
    {user && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/logout' element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        } />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Profile />} />
        <Route path="/chats" element={<Profile />} />
        <Route path="/users" element={<Profile />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      {user && <BottomNav />}
    </>
  )
}

export default App
