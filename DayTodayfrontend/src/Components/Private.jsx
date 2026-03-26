import { useContext } from "react";
import { Auths } from "./Auth";
import { Navigate } from "react-router-dom";


const Private=({children})=>{
const {login}=useContext(Auths)
return(
    login?children:<Navigate to="/"   replace/> 
)

}
export default Private;