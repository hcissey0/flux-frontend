import { Link } from "react-router-dom"
import { CommentInterface } from "../../interfaces/comment.interfaces"
import CommentLikeButton from "../atoms/CommentLikeButton"
import CommentReplyButton from "../atoms/CommentReplyButton"
import { useState } from "react"
import Api from "../../utils/api"
import { useAuth } from "../../hooks/useAuth"
import ReplyItem from "./ReplyItem"
import TimeDisplay from "../atoms/TimeDisplay"
import Avatar from "../atoms/Avatar"

const CommentMenuItem = ({ comment }: {comment:CommentInterface}) => {
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
        }
    }

    const handleReply = async () => {
        setIsLoading(true);
        const data = await Api.replyToComment(token, comment._id, text);
        if (data.error) {
            alert(data.error.message);
        } else {
            replies.push(data.reply as CommentInterface)
            setReplies(replies);
            setRepliesNo(repliesNo+1);
        }
        setText('');
        setIsLoading(false)

    }
    return (
        <div className="card w-full p-2 bg-base-200 mb-2">
            <div className="card-body p-0 pb-3">
                <div className="flex gap-3 items-center">
                    <div>
                        <Avatar user={comment.author} w="8" size="md" />
                    </div>
                    <div className="flex flex-col text-start ">
                        <p className="text-sm">{comment.author.firstName + " " + comment.author.lastName}</p>
                        <a href={'/users/' + comment.author.username} className="text-xs">@{comment.author.username}</a>
                    </div>
                    <div className="text-xs opacity-50">
                        <TimeDisplay timestamp={comment.createdAt}/>
                    </div>

                </div>
              <p className="mt-4 ml-8 ">{comment.text}</p>
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

export default CommentMenuItem
