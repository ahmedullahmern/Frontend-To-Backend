import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import Cookies from 'js-cookie'
function Navbar() {
    const { setUser } = useContext(AuthContext)
    const handleLogout = () => {
        Cookies.set("token", null);
        setUser(null)
    }
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <span className="ml-3 text-xl">UserPage</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-gray-900">First Link</a>
                    <a className="mr-5 hover:text-gray-900">Second Link</a>
                    <a className="mr-5 hover:text-gray-900">Third Link</a>
                    <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                </nav>
                <button className="text-white inline-flex items-center bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-300 rounded text-base mt-4 md:mt-0"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Navbar