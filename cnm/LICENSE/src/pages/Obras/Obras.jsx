import ObrasContenido from "./ObrasContenido";
import NavBar from "../../components/shared/NavBar";
import "./componentes/styles.css"
export default function Obras (){
    return (
        <div className='obras'>
        <NavBar/>
        <ObrasContenido/>
        </div>
    )
}