import { PostInterface } from '../../interfaces/post.interfaces'
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import Api from '../../utils/api';

const SaveButton = ({ post }: { post: PostInterface }) => {
    const { user, token } = useAuth();
    const [saved, setSaved] = useState(post.saves.includes(user._id));
    const [saves, setSaves] = useState(post.saves.length)

    const handleSave = async () => {
      const data = await Api.savePost(token, post._id);
      if (data.error) {
        alert(data.error.message);
      } else if (data.saved) {
        setSaved(true);
        setSaves(saves + 1);
      } else {
        setSaved(false);
        setSaves(saves - 1);
      }
    }
  return (
    <div>
      <button
        onClick={handleSave}
        className="btn btn-sm btn-ghost rounded-full">
        {saves}
        {saved ?
        <svg className='w-5 h-5' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.89 5.87891H5.11C3.4 5.87891 2 7.27891 2 8.98891V20.3489C2 21.7989 3.04 22.4189 4.31 21.7089L8.24 19.5189C8.66 19.2889 9.34 19.2889 9.75 19.5189L13.68 21.7089C14.96 22.4089 16 21.7989 16 20.3489V8.98891C16 7.27891 14.6 5.87891 12.89 5.87891Z" />
        <path d="M21.9998 5.11V16.47C21.9998 17.92 20.9598 18.53 19.6898 17.83L17.7598 16.75C17.5998 16.66 17.4998 16.49 17.4998 16.31V8.99C17.4998 6.45 15.4298 4.38 12.8898 4.38H8.81984C8.44984 4.38 8.18984 3.99 8.35984 3.67C8.87984 2.68 9.91984 2 11.1098 2H18.8898C20.5998 2 21.9998 3.4 21.9998 5.11Z" />
        </svg> :
        <svg className='w-5 h-5' viewBox="0 0 24 24" stroke='currentColor' fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.89 5.87988H5.10999C3.39999 5.87988 2 7.27987 2 8.98987V20.3499C2 21.7999 3.04 22.4199 4.31 21.7099L8.23999 19.5199C8.65999 19.2899 9.34 19.2899 9.75 19.5199L13.68 21.7099C14.95 22.4199 15.99 21.7999 15.99 20.3499V8.98987C16 7.27987 14.6 5.87988 12.89 5.87988Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8.98987V20.3499C16 21.7999 14.96 22.4099 13.69 21.7099L9.76001 19.5199C9.34001 19.2899 8.65999 19.2899 8.23999 19.5199L4.31 21.7099C3.04 22.4099 2 21.7999 2 20.3499V8.98987C2 7.27987 3.39999 5.87988 5.10999 5.87988H12.89C14.6 5.87988 16 7.27987 16 8.98987Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    }
      </button>
    </div>
  )
}

export default SaveButton

