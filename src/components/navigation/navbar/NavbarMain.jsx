import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [{title: "Accueil", link: "/"}, {title: "Contact",link:"/contact"}, {title: "Travaux", link: "/work/projects"}]

const NavbarMain = () => {
    return (
        <div className="flex justify-between my-8">
            <div></div>
            <div>
                <ul>
                    {menuItems.map(item => (
                      <li className="inline-block px-8" key={item.title}>
                          <Link to={item.link}>{item.title}</Link>
                      </li>
                    ))}
                </ul>
            </div>
            <div>
                @ 2020 alexandre-cailler
            </div>
        </div>
    )
}

export default NavbarMain
