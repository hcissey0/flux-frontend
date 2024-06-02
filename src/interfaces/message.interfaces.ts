import { UserInterface } from "./user.interfaces"

export interface MessageInterface {
    _id: string
    author: UserInterface
    text: string
    edited: boolean
    chat: string
    createdAt: string
    updatedAt: string
}
