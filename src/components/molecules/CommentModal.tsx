import { SetStateAction, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PostInterface } from "../../interfaces/post.interfaces"
import Api from "../../utils/api";
import { CommentInterface } from "../../interfaces/comment.interfaces";
import Loader from "../atoms/Loader";
import CommentMenuItem from "./CommentMenuItem";

const CommentModal = ({
    post,
    commentsNo,
    setCommentsNo
 }: {
    post: PostInterface,
    commentsNo: number,
    setCommentsNo: React.Dispatch<SetStateAction<number>>,
 }) => {
    const { token } = useAuth();
    const [text, setText] = useState('');
    const [comments, setComments] = useState<CommentInterface[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function func() {
            setIsLoading(true);
            const data = await Api.getPostComments(token, post._id);
            if (data.error) {
                alert(data.error.message);
            } else {
                setComments(data.comments as CommentInterface[])
            }
            setIsLoading(false);
        }
        func()
    }, []);

    const handleCreateComment = async () => {
        setIsLoading(true);
        const data = await Api.postComment(token, post._id, text);
        if (data.error) {
            alert(data.error.message)
        } else {
            comments.push(data.comment as CommentInterface);
            setComments(comments);
            setCommentsNo(commentsNo+1);
        }
        setText('');
        setIsLoading(false);

    }

    return (
        <div className="modal-box h-4/5 ">
                <h3 className="font-bold text-lg">Comments on Post</h3>
            <div className='h-full flex flex-col justify-end'>


                <div className='flex flex-col justify-between h-3/4 flex-1 pt-4'>
                    <div className='overflow-y-auto'>
                        {isLoading && <Loader />}
                        {comments.length ?
                        comments.map((comment) => <div key={comment._id}>
                            <ul className="menu bg-base-200 ">
                                <CommentMenuItem comment={comment} />
                            </ul>
                        </div>) :
                        <p className='text-center'>no comments</p>}
                    </div>

                    <div className='w-full'>
                        <div className="w-full rounded-full p-4 flex justify-between px-7">
                            <div>
                              <input
                                type="text"
                                name='text'
                                value={text}
                                placeholder="Write a comment..."
                                className="input input-bordered w-full rounded-full max-w-xs"
                                onChange={(e) => setText(e.target.value)}
                                />
                            </div>
                            <div>
                              <button
                                disabled={isLoading}
                                className="btn btn-primary btn-md rounded-badge"
                                onClick={handleCreateComment}
                                >
                                  {"Comment"}
                              </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentModal
