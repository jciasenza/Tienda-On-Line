import React, {useContext } from 'react'
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider"
import { FiShoppingCart } from "react-icons/fi"


export const Header = () => {

    const { menu, setMenu, carrito } = useContext(DataContext);

    const toogleMenu = () => {
        setMenu(!menu);
    }
    return (
        <header>
            <Link to="/">
                <div className="logo">
                    <img src={logo} alt="logo" width="150"/>
                </div>
            </Link>
            <ul>
                <li>
                    <Link to="/">INICIO</Link>
                </li>
                <li>
                    <Link to="/productos">PRODUCTOS</Link>
                </li>
                <li>
                    <Link to="/contacto">CONTACTO</Link>
                </li>
            </ul>
            <div className="cart" onClick={toogleMenu}>
               <FiShoppingCart /> 
               <span className="item__total">{carrito.length}</span>
            </div>
        </header>
    )
}


