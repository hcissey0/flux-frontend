import { CommentInterface } from "../../interfaces/comment.interfaces"

const CommentMenuItem = ({ comment }: {comment:CommentInterface}) => {

    return (
            <li>
                <p>{comment.author.toString()}</p>
                <a></a>
                <a>{comment.text}</a>
            </li>
            // <li>
            //     <a>Parent</a>
            //     <ul>
            //     <li><a>Submenu 1</a></li>
            //     <li><a>Submenu 2</a></li>
            //     <li>
            //         <a>Parent</a>
            //         <ul>
            //         <li><a>Submenu 1</a></li>
            //         <li><a>Submenu 2</a></li>
            //         </ul>
            //     </li>
            //     </ul>
            // </li>
            // <li><a>Item 3</a></li>
    )
}

export default CommentMenuItem
