import { ResponseInterface } from "../interfaces/response.interfaces";


export default class Api {
    static apiUrl = import.meta.env.BACKEND_URL || 'http://localhost:4/api';
    static async get(url: string): Promise<ResponseInterface> {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'default'
        });
        const data = await response.json();
        return data;

    }

    static async post(url: string): Promise<ResponseInterface> {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                cache: 'default'
            });
            const data = await response.json();
            return data;
        } catch(e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async loginUser(username:string, password:string): Promise<ResponseInterface> {
        try {

            console.log('lgoi')
            const response = await fetch(`${Api.apiUrl}/auth/connect`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(username+":"+password)}`
                },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async registerUser(
        firstName:string,
        lastName:string,
        username:string,
        email:string,
        password:string,

    ): Promise<ResponseInterface> {
        try {
            console.log('registering')
        const response = await fetch(`${Api.apiUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                username,
                email,
                password
            })
        });
        const data = await response.json();
        return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async getPosts(token: string): Promise<ResponseInterface> {
        try {
            console.log(token)
            const response = await fetch(`${Api.apiUrl}/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log(e)
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }

    }

    static async createPost(token:string, text:string): Promise<ResponseInterface> {
        try {
            const response = await fetch(`${Api.apiUrl}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    text
                })
            });
            const data = await response.json();
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async likePost(token:string, postId:string): Promise<ResponseInterface> {
        try {
            const response = await fetch(`${Api.apiUrl}/posts/${postId}/likes`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async savePost(token:string, postId:string): Promise<ResponseInterface> {
        try {
            const response = await fetch(`${Api.apiUrl}/posts/${postId}/saves`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async postComment(token:string, postId:string, text:string): Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/posts/${postId}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    text
                })
            });
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async getPostComments(token:string, postId:string): Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/posts/${postId}/comments`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }
}
