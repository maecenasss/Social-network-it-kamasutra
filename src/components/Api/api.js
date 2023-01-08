import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '56209ec5-7520-4f65-a0a3-50f8519fcb06'
    }

});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//відокремлюємо із відповіді із сервера лише дату
        .then(response => {
            return response.data; 
        });
    },

    follow (usersId) {
        return instance.post(`follow/${usersId}`)
    },
    unfollow (usersId) {
      return  instance.delete(`follow/${usersId}`)
    },
    getProfile (userId) {
        console.log ("Obsolete method. Please use profileAPI")
        return profileAPI.getProfile(userId);
    }
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get (`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get (`status/${userId}`)
    },
    updateStatus (status) {
        return instance.put (`status`, {status: status})

    }
};

export const authAPI = {
    me () {
    return instance.get(`auth/me`)
    }
}
