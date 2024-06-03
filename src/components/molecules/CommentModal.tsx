import { SetStateAction, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PostInterface } from "../../interfaces/post.interfaces"
import Api from "../../utils/api";
import { CommentInterface } from "../../interfaces/comment.interfaces";
import Loader from "../atoms/Loader";
import CommentMenuItem from "./CommentMenuItem";

const CommentModal = ({
    post,
    comments,
    setComments,
    isLoading,
    setIsLoading,
    commentsNo,
    setCommentsNo
 }: {
    post: PostInterface,
    comments: CommentInterface[],
    setComments: React.Dispatch<SetStateAction<CommentInterface[]>>,
    isLoading: boolean,
    setIsLoading: React.Dispatch<SetStateAction<boolean>>,
    commentsNo: number,
    setCommentsNo: React.Dispatch<SetStateAction<number>>,
 }) => {
    const { token } = useAuth();
    const [text, setText] = useState('');


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
        <div className="p-5 rounded-box bg-base-100 w-full max-w-3xl h-full max-h-[48rem] overflow-auto">
            <form method="dialog" className="text-end">
                <button className="btn btn-sm btn-ghost btn-circle hover:text-error">x</button>
            </form>
            <div className=" h-full flex flex-col justify-between ">
                <h3 className="font-bold text-lg">Comments on Post</h3>
                <div className='flex flex-col flex-1 justify-end '>
                    <div className='flex flex-col justify-between flex-1 pt-4 overflow-auto'>
                        <div className='max-h-[33rem] overflow-auto '>
                            {isLoading && <Loader />}
                            {comments.length ?
                            comments.map((comment) => <div key={comment._id}>
                                    <CommentMenuItem comment={comment} />
                                    {/* <div className="divider"></div> */}
                            </div>) :
                            <p className='text-center'>no comments</p>}
                        </div>
                        <div className='w-full'>
                            <div className="w-full rounded-full p-4 flex justify-between gap-7 px-7">
                                <div className="flex-1">
                                <input
                                    type="text"
                                    name='text'
                                    disabled={isLoading}
                                    value={text}
                                    placeholder="Write a comment..."
                                    className="input input-bordered w-full rounded-full"
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
                </div>
                <div className="modal-action">
                    <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn rounded-badge hover:text-error">Close</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CommentModal
