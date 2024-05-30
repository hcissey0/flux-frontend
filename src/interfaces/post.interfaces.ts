import { UserInterface } from "./user.interfaces"

export interface PostInterface {
    _id: string
    text: string
    author: UserInterface
    edited: boolean
    likes: string[]
    comments: string[]
    saves: string[]
    createdAt: string
    updatedAt: string
}
