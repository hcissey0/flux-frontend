
import { ResponseInterface } from "../interfaces/response.interfaces";



export default class Api {
    static apiUrl = import.meta.env.VITE_BACKEND_URL || 'http://192.168.50.190/api';

    static checkConnected(data: ResponseInterface) {
        console.log(data)
        console.log(data.error)
        if (data.error?.statusCode === 401) {
            window.location.href = '/login'
        }

    }
    static async get(url: string): Promise<ResponseInterface> {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'default'
        });
        const data = await response.json();
        Api.checkConnected(data);
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
            Api.checkConnected(data);
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
            Api.checkConnected(data);
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
            Api.checkConnected(data);
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
            Api.checkConnected(data);
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
            Api.checkConnected(data);
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
            Api.checkConnected(data);
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
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async likeComment(token:string, commentId:string): Promise<ResponseInterface> {
        try {
            const response = await fetch(`${Api.apiUrl}/comments/${commentId}/likes`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const data = await response.json();
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async replyToComment(token: string, commentId:string, text:string)
    :Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/comments/${commentId}/replies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    reply: true,
                    text
                })
            });
            const data = await res.json();
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async getCommentReplies(token: string, commentId:string)
    :Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/comments/${commentId}/replies`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            const data = await res.json();
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async getSavedPosts(token:string): Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/auth/me/saved`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await res.json();
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async followUser(token:string, userId:string): Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/users/${userId}/follow`,{
                method: 'POST',
                headers:{
                    'Authorization': `Bearer ${token}`,
                }
            });
            const data = await res.json();
            Api.checkConnected(data);
            return data;

        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async deletePost(token:string, postId:string)
    : Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/posts/${postId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            Api.checkConnected(data);
            return data;

        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async editPost(token:string, postId:string, text:string)
    : Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/posts/${postId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    text
                })
            });
            const data = await res.json();
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async getUsers(token:string)
    : Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/users`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            Api.checkConnected(data);
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async createChat(token:string, participantIds:string[], name:string, isGroup:boolean)
    : Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/chats`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name,
                    participantIds,
                    isGroup
                })
            });
            const data = await res.json();
            Api.checkConnected(data);
            console.log(data)
            return data;
        } catch (e) {
            return {
                error: {
                    message: (e as Error).message
                }
            }
        }
    }

    static async getUserChats(token:string)
    : Promise<ResponseInterface> {
        try {
            const res = await fetch(`${Api.apiUrl}/auth/me/chats`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await res.json();
            Api.checkConnected(data);
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
