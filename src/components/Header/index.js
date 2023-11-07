import React from "react";
import {useNavigate} from "react-router-dom";
import {menus} from "../constants/menus";

export default function Header() {
    const navigate = useNavigate();
    // const cookies = new Cookies();
    // cookies.set('myCat', 'Pacman', { path: '/' });
    // console.log(cookies.get('myCat')); // Pacman

    const Menu = ({data}) => {
        return (
            <ul className={"list-disc"}>
                {Object.values(data).map((m,index) => {
                    return (<li key={index}>
                                <div onClick={() => navigate(m.path?m.path:m.absolutePath)}>
                                    {m.title}
                                </div>
                                {
                                    m.subPaths && <Menu data={m.subPaths}/>
                                }

                    </li>);
                })}
            </ul>
        );
    }
    return (
        <>
            <Menu data={menus}/>
        </>

    )
}
