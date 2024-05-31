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
        <Link to={'/'} role='button' className={`${pathname == '/' ? 'active' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="btm-nav-label">Home</span>
        </Link>
        <Link to={'/saved'} role='button' className={`${pathname == '/saved' ? 'active' : ''}`}>
          <svg className='h-6, w-6' stroke='currentColor' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="btm-nav-label">Saved</span>
        </Link>
      </div>
    </div>
  )
}

export default BottomNav
