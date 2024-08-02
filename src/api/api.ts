import axios from "axios";

export const imageUrl = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const API_KEY = 'd6ad6035-023d-4093-b438-0b99459c3256'
const token = '72f766d8-b8bf-4979-99f8-b5f7368601de'

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

//create LOGIN page and FETCH more USERS by scrolling