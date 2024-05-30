import { ResponseInterface } from "./response.interfaces";
import { UserInterface } from "./user.interfaces";

export interface AuthContextInterface {
    token: string;
    user: UserInterface;
    login: (username: string, password: string) => Promise<ResponseInterface | null>;
    register: (
        firstName:string,
        lastName:string,
        username:string,
        email:string,
        password:string,
    ) => Promise<ResponseInterface | null>;
    logout: () => void;
}
