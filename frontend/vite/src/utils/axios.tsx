import axios from "axios";

export const BaseAxios = axios.create({
    baseURL: 'http://localhost:4000/api/notes',
    headers: {
        'Content-Type' : 'application/json'
    }
})