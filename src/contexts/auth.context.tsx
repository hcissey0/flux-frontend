import { createContext } from "react";
import { AuthContextInterface } from "../interfaces/auth.interfaces";
import Api from "../utils/api";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ResponseInterface } from "../interfaces/response.interfaces";


export const AuthContext = createContext<AuthContextInterface>(null as unknown as AuthContextInterface);

export const AuthProvider = (
    { children }: { children: React.ReactNode }
) => {
    const [token, setToken] = useLocalStorage('flux-token', null);
    const [user, setUser] = useLocalStorage('user', null);

    const login = async (
        username: string,
        password: string
    ): Promise<ResponseInterface | null> => {
        const data = await Api.loginUser(username, password)
        if (data.token) {
            setToken(data.token);
            setUser(data.user);
        }
        return data;
    };

    const register = async (
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        password: string
        ): Promise<ResponseInterface | null> => {
            const data = await Api.registerUser(
                firstName,
                lastName,
                username,
                email,
                password
            )

            return data;
        };

    const logout = () => {
        setToken(null);
        setUser(null);
    };



    return (
        <AuthContext.Provider value={{
            user,
            token,
            login,
            register,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
