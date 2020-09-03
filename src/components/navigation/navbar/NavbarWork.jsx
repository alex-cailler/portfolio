import React from "react"
import {Link} from "react-router-dom";

const menuItems = [{title: "Galerie", link: "/picture"}, {title: "Design",link:"/design"}, {title: "Projets", link: "/projects"}, {title: "Labo", link: "/labs"}]

const NavbarWork = ({match}) => {
    return (
        <div className="fixed left-0 top-0  h-100P">
            <ul>
                {menuItems.map( item => (
                    <li className="py-6 text-center px-12" key={item.link}>
                        <Link to={`/work${item.link}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavbarWork
