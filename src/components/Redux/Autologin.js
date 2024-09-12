
import { useDispatch } from "react-redux";
import { setUsertokenFromLocalStorage } from "./authSlice";

function AutoLogin(props){
    const dispatch = useDispatch();
    dispatch(setUsertokenFromLocalStorage())
    
    return props.children
}

export default AutoLogin;