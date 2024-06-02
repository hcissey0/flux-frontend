import { MessageInterface } from "./message.interfaces"
import { UserInterface } from "./user.interfaces"

export interface ChatInterface {
    _id: string
    name: string
    isGroup: boolean
    admins: UserInterface[]
    participants: string[]
    messages: string[]
    lastMessage: MessageInterface
    createdAt: string
    updatedAt: string
}
