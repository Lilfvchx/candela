import {BiHomeHeart} from 'react-icons/bi'
import {GiTheaterCurtains} from 'react-icons/gi'
import {GrContactInfo} from 'react-icons/gr'
import {SiAboutdotme} from 'react-icons/si'
export const SidebarData = [
{
    title:"Inicio",
    path: "/",
    icon: <BiHomeHeart/>,
    cName: "nav-text",
},
{
    title:"Obras",
    path: "/obras",
    icon: <GiTheaterCurtains/>,
    cName: "nav-text",
},
{
    title:"About me",
    path: "/aboutme",
    icon: <SiAboutdotme/>,
    cName: "nav-text",
},
{
    title:"Contacto",
    path: "/contacto",
    icon: <GrContactInfo/>,
    cName: "nav-text",
},
]
