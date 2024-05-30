import { CommentInterface } from "./comment.interfaces";
import { PostInterface } from "./post.interfaces";
import { UserInterface } from "./user.interfaces";

interface Error {
    message: string;
    statusCode?: string;
}

export interface ResponseInterface {
    error?: Error
    token?: string
    user?: UserInterface
    post?: PostInterface
    posts?: PostInterface[]
    liked?: boolean
    saved?: boolean
    replied?: boolean
    comment?: CommentInterface
    comments?: CommentInterface[]
    // chat?: ChatInterface
    // chats?: ChatInterface[]
    // message?: MessageInterface
    // messages?: MessageInterface[]
}