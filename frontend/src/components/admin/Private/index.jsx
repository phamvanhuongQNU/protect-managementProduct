
import { Outlet} from "react-router-dom";
function Private({token,role}){
    
    return (
        <>
        {token && role ? <Outlet/> : <p></p>}
        </>
    )
}
export default Private