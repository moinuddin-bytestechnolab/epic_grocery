import axios, { AxiosError } from "axios"


const API_URL = "http://192.168.1.13:3000/"


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

    // export const allCategories = async(multipleProduct: any){
    //     try {
    //         const res = await axios.get(`${API_URL}categories`)
    //     } catch (error) {
            
    //     }
    // }