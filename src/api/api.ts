import axios from "axios";

export const imageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const API_KEY = 'd6ad6035-023d-4093-b438-0b99459c3256'
const token = '16239723-793f-453e-84ef-046bd9c75347'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': API_KEY,
        Authorization: `Bearer ${token}`,
        "Content-Type": 'application/json'
    }
})

export const UsersAPI = {
    getUsers(page = 1){
        return instance.get(`/users?count=20&page=${page}`)
    }
}

export const AuthAPI = {
    isAuth(){
        return instance.get('/auth/me')
    },
    login(data: {email: string, password: string}){
        return instance.post(`/auth/login`, data)
    }
}


export const ProfileAPI = {
    getProfile(userId?: string){
        return instance.get(`/profile/${userId}`)
    }
}
//create LOGIN page and FETCH more USERS by scrolling