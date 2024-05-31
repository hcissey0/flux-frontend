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
import SavedPosts from './components/pages/SavedPosts';

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
    <div  className='flex justify-center pt-8 pb-24'>
    {user && <NavBar />}
      <div className='pt-24 w-full'>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/saved' element={
          <PrivateRoute>
            <SavedPosts />
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
      </div>
      </div>
    </>
  )
}

export default App
