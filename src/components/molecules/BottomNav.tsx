import { useLocation, Link } from 'react-router-dom';

const BottomNav = () => {

  const pathname = useLocation().pathname;

  return (
    <div>
      <div className="btm-nav">
          <Link to={'/chats'} role='button' className={`${pathname == '/chats' ? 'active' : ''}`}>
  <svg className='h-6 w-6' stroke='currentColor' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" strokeWidth="1.5"/>
<path d="M8 10.5H16" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M8 14H13.5" strokeWidth="1.5" strokeLinecap="round"/>
</svg>
    <span className="btm-nav-label">Chat</span>

  </Link>


  <Link to={'/feed'} role='button' className={`${pathname == '/feed' ? 'active' : ''}`}>
  <svg fill="none" stroke='currentColor' className='h-6 w-6' viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.002 15.999c-1.107 0-2.004.897-2.002 2.001 0 1.104.896 2.001 2.002 1.999 1.103.002 2-.894 1.998-1.999.002-1.107-.895-2.003-1.998-2.001zM6 4c-1.104 0-2 .896-2 2s.896 2 2 2c5.514 0 10 4.486 10 10 0 1.104.896 2 2 2s2-.896 2-2c0-7.72-6.28-14-14-14zM6 10c-1.104 0-2 .896-2 2s.896 2 2 2c2.205 0 4 1.794 4 4 0 1.104.896 2 2 2s2-.896 2-2c0-4.411-3.589-8-8-8z"/></svg>
    <span className="btm-nav-label">Feed</span>
  </Link>
      <Link to={'/'} role='button' className={`${pathname == '/' ? 'active' : ''}`}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    <span className="btm-nav-label">Home</span>
  </Link>

  <Link to={'saved'} role='button' className={`${pathname == '/saved' ? 'active' : ''}`}>
  <svg className='h-6, w-6' stroke='currentColor' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    <span className="btm-nav-label">Saved</span>
  </Link>
  <Link to={'profile'} role='button' className={`${pathname == '/profile' ? 'active' : ''}`}>
  <svg className='h-6 w-6' stroke='currentColor' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2"/>
<path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" strokeWidth="2"/>
<path d="M6.16406 18.5C6.90074 16.5912 8.56373 16 12.0001 16C15.4661 16 17.128 16.5578 17.855 18.5" strokeWidth="2" strokeLinecap="round"/>
</svg>
    <span className="btm-nav-label">Profile</span>
  </Link>
</div>
    </div>
  )
}

export default BottomNav
