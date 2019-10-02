import * as axios from "axios";


let instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY":"90ea3714-f41f-4310-a4ed-e35835e97376"
    }
})

export const userAPI = {
    getUsers(currentPage,pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,{})
            .then(response => {
                return response.data;
            })
    },
    getOneUserData(userID){
        return instance
            .get(`profile/${userID}`,{})
            .then(response => {
                return response.data;
            });

    },
    getUserProfilePageRequest () {
        return instance
            .get(`auth/me`, {})
            .then(response => {
                return response.data
            });
    },
    unfollowUsers(id) {
        return instance
            .delete(`follow/${id}`,{})
            .then(response => {
                return response.data
            })
    },
    followUsers(id) {
        return instance
            .post(`follow/${id}`,{},{})
            .then(response => {
                return response.data
            })
    },
}

