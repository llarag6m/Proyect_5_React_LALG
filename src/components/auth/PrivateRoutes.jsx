import { useSelector } from "react-redux"
import { Navigate, Outlet} from "react-router-dom"
import HeaderPokeball from "../layout/HeaderPokeball"

const PrivateRoutes = () => {

  const {name} = useSelector((store) => store.trainer)

    if (name) {
        return (
        <HeaderPokeball>
            <Outlet />
        </HeaderPokeball>
        )
    }else{
        return <Navigate to = "/" />
    }

}
export default PrivateRoutes