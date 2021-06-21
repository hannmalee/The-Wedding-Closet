import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"


export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">The Wedding Closet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/users"></Link>
                <button>My Profile</button>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/requests"></Link>
                <button>Requests</button>
            </li>

        </ul>
    )
}
