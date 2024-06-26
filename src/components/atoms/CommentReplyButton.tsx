
const CommentReplyButton = ({
    handleReplyClick,
    repliesNo
}: {
    handleReplyClick: () => void,
    repliesNo: number
}) => {

  return (
    <div>
      <button
        onClick={handleReplyClick}
        className="btn btn-sm btn-ghost rounded-full">
          {repliesNo}
          {repliesNo === 0 ?
           <svg version="1.1" className="w-6 h-6" id="Icons" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 32 32" fill="currentColor">
      <path
      fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10'
      className="st0" d="M11.7,8.1V6c0-0.8-0.9-1.3-1.5-0.8l-6.8,6c-0.5,0.4-0.5,1.2,0,1.6l6.8,6c0.6,0.5,1.5,0,1.5-0.8v-2h0.9
          c7.1,0,13.5,4.3,16.5,11C29,16.8,21.3,8.6,11.7,8.1z"/>
      </svg>
           :
           <svg fill="currentColor" className="w-6 h-6" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32" >
     <path d="M12.7,7.1V6c0-0.8-0.4-1.5-1.1-1.8c-0.7-0.3-1.4-0.2-2,0.2l-6.7,6C2.3,10.8,2,11.4,2,12s0.3,1.2,0.7,1.6l6.8,6
         c0.6,0.4,1.3,0.5,2,0.2c0.7-0.3,1.1-1,1.1-1.8v-1c6.6,0.1,12.7,4.1,15.4,10.4c0.2,0.4,0.5,0.6,0.9,0.6c0.1,0,0.1,0,0.2,0
         c0.5-0.1,0.8-0.5,0.8-1C30,16.7,22.5,8.2,12.7,7.1z"/>
     </svg>
          }
      </button>
    </div>
  )
}

export default CommentReplyButton

