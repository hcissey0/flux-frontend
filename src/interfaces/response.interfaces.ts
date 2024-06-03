import { ChatInterface } from "./chat.interfaces";
import { CommentInterface } from "./comment.interfaces";
import { MessageInterface } from "./message.interfaces";
import { PostInterface } from "./post.interfaces";
import { UserInterface } from "./user.interfaces";

interface Error {
    message: string;
    statusCode?: number;
}

export interface ResponseInterface {
    error?: Error
    token?: string
    user?: UserInterface
    users?: UserInterface[]
    post?: PostInterface
    posts?: PostInterface[]
    comment?: CommentInterface
    comments?: CommentInterface[]
    reply?: CommentInterface
    replies?: CommentInterface[]
    chat?: ChatInterface
    chats?: ChatInterface[]
    message?: MessageInterface
    messages?: MessageInterface[]
    liked?: boolean
    saved?: boolean
    followed?: boolean
    replied?: boolean
}
