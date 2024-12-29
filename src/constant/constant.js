const devUrl = 'http://localhost:4000/';


export const BASE_URL = devUrl

export const AppRoutes = {
    login: BASE_URL + 'auth/login',
    register: BASE_URL + 'auth/register',
    getMyInfo: BASE_URL + 'users/myInfo',
    getCourse: BASE_URL + 'course',
    addCourse: BASE_URL + 'course',
}