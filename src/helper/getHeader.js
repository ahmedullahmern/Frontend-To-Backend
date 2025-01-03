import Cookies from 'js-cookie'

function getHeader() {
    const token = Cookies.get("token");
    return ({
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
}
export default getHeader