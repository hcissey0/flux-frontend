import { MessageInterface } from "./message.interfaces"
import { UserInterface } from "./user.interfaces"

export interface ChatInterface {
    _id: string
    name: string
    isGroup: boolean
    admins: UserInterface[]
    participants: UserInterface[]
    messages: MessageInterface[]
    lastMessage: MessageInterface
    createdAt: string
    updatedAt: string
}
