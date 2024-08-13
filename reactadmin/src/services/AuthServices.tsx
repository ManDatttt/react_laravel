import axiosIntance from "../configs/axios";
import { handleAxiosError } from "../helpers/axiosHelper";
import { User } from "../types/User";

type LoginPayload = {
    email: string,
    password: string
}


const login = async(payload:LoginPayload): Promise<User | null> => {
    try {

        const response = await axiosIntance.post('/auth/login', {
            email: payload.email,
            password: payload.password
        })
        const user = response.data.user
        return user

    } catch (error) {
        handleAxiosError(error)
        return null
    }
}

const fetchUser = async(): Promise<User | null> => {

    try {

        const response = await axiosIntance.get('/auth/me')
        console.log(response)
        
        // return response

    } catch (error) {
        handleAxiosError(error)
        return null
    }


    return null
}



export{ login, fetchUser }