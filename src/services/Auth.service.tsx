import axios, { AxiosError } from "axios"
import { AuthHeader } from "./Auth-Header"
import Toaster from "../hooks/Toaster"

const API_URL = "http://192.168.1.11:3000/"

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Authentication APIs !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// register
export const register = async(users:any) => {
    return await axios
    .post(`${API_URL}users/register`,users)
}


// login
export const login = async (logUser : any) => {
    return await axios
    .post(`${API_URL}auth/login`,logUser)
    .then((res) => {
        if(res.data.accessToken){
            localStorage.setItem("user",JSON.stringify(res.data))
        }
        return res.data;
    })
    .catch((err) => {
        console.log(err);
    })
}   

//Change Password

export const changePassword = async (userData : any) => {
    return await axios
    .patch(`${API_URL}users/change-password`, userData, { headers : AuthHeader() })
    .then((res)=>{
        if(res){
            Toaster.success(res.data.message)            
        }
    })
    .catch((err)=>{
        Toaster.error(err.response.data.message)
    })
}



//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Other All APIs !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Search Product 

export const searching = async(search:any) => {
    try {
        const res = await axios.get(`${API_URL}products?name=${search}`); 
        return res;
    } catch (error) {
        console.log(error);
    }
}


// All Categories 

export const allCategories = async() => {
    try {
        const res = await axios.get(`${API_URL}categories`, { headers : AuthHeader() });
        return res
    } catch (error) {
        console.log(error);
    }
}

// All Product

export const allProducts = async()=> {
    try {
        const res = await axios.get(`${API_URL}products`);
        return res
    } catch (error) {
        console.log(error);
                
    }
}

