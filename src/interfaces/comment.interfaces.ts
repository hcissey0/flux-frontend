import { UserInterface } from "./user.interfaces";

export interface CommentInterface {
    _id: string
    author: UserInterface | string
    text: string
    likes: string[]
    replies: CommentInterface[] | string[]
    edited: boolean
}
