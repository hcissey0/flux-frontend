import { useState } from 'react'
import { CommentInterface } from '../../interfaces/comment.interfaces'
import { Link } from 'react-router-dom'

import CommentLikeButton from '../atoms/CommentLikeButton'
import CommentReplyButton from '../atoms/CommentReplyButton'
import { useAuth } from '../../hooks/useAuth'
import Api from '../../utils/api'
import Avatar from '../atoms/Avatar'

const ReplyItem = ({ comment }: { comment: CommentInterface }) => {
    const { token } = useAuth();
    const [inputOpen, setInputOpen] = useState(true);
    const [repliesNo, setRepliesNo] = useState(comment.replies.length);
    const [replies, setReplies] = useState<CommentInterface[]>([])
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleReplyClick = async () => {
        setInputOpen(!inputOpen);
        const data = await Api.getCommentReplies(token, comment._id);
        if (data.error) {
            alert(data.error.message);
        } else {
            setReplies(data.replies as CommentInterface[]);
            // setRepliesNo(repliesNo+1);
        }
    }

    const handleReply = async () => {
        if (!text) return;
        setIsLoading(true);

        const data = await Api.replyToComment(token, comment._id, text);
        if (data.error) {
            alert(data.error.message);
        } else {
            replies.push(data.reply as CommentInterface)
            setReplies(replies)
            setRepliesNo(repliesNo+1);
        }
        setText('');
        setIsLoading(false)

    }
  return (
    <div>
        <div className="bg-base-100 card-body p-5 m-2 rounded-box">
                <div className="flex gap-3 items-center">
                    <div>
                        <Avatar user={comment.author} w="8" size="md" />
                    </div>
                    <div className="flex flex-col">
                        <p className='text-xs font-bold'>{comment.author.firstName + " " + comment.author.lastName}</p>
                        <a href="" className="text-xs">@{comment.author.username}</a>
                    </div>
                </div>
              <p className=''>{comment.text}</p>
              <div className="card-actions justify-end">
                <CommentLikeButton comment={comment} />
                <CommentReplyButton repliesNo={repliesNo} handleReplyClick={handleReplyClick} />
              </div>
              <div hidden={inputOpen}>
                    <div>
                        {replies && replies.map((reply) => <ReplyItem key={reply._id} comment={reply} />)}
                    </div>
                    <div className='w-full'>
                        <div className="w-full gap-3 rounded-full flex justify-end pt-4">
                            <div>
                            <input
                                type="text"
                                name='text'
                                value={text}
                                placeholder="Write a reply..."
                                className="input input-bordered input-sm w-full rounded-full max-w-xs"
                                onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <div>
                            <button
                                disabled={isLoading}
                                className="btn btn-primary btn-sm rounded-badge"
                                onClick={handleReply}
                                >
                                {"Reply"}
                            </button>
                            </div>
                        </div>
                    </div>
              </div>
            </div>
    </div>
  )
}

export default ReplyItem

