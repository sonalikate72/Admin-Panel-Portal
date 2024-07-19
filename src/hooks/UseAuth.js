import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const useAuth = ()=> {
    const [isAuthenticated, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("Token", token)
        if (token) {
            setAuth(true)
        } else {
            setAuth(false)
        }
    }, [navigate])

    return isAuthenticated;
}
export default useAuth