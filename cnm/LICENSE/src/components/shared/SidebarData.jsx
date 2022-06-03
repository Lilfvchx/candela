import {BiHomeHeart} from 'react-icons/bi'
import {GiTheaterCurtains} from 'react-icons/gi'
import {BiBookHeart} from 'react-icons/bi'
import {VscPerson} from 'react-icons/vsc'
export const SidebarData = [
{
    title:"Inicio",
    path: "/",
    icon: <BiHomeHeart size="1.8em" title='Home'/>,
    cName: "nav-text",
},
{
    title:"Obras",
    path: "/obras",
    icon: <GiTheaterCurtains size="1.8em" title='Obras realizadas'/>,
    cName: "nav-text",
},
{
    title:"About me",
    path: "/aboutme",
    icon: <VscPerson size="1.8em" title='About Me'/>,
    cName: "nav-text",
},
{
    title:"Contacto",
    path: "/contacto",
    icon: <BiBookHeart size="1.8em" title='Contacto'/>,
    cName: "nav-text",
},
]
