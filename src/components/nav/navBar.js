import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"
import { UserContext, getUsers } from "../UserProvider"
import { useState, useContext } from "react"

export const NavBar = (props) => {

    
    
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">The Wedding Closet</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to={`/profile/myProfile/${localStorage.getItem('wedding_closet_user')}`}>
                    <button>My Profile</button>
                    </Link>
                
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/requests"><button>Request Inbox</button></Link>
                
            </li>

        </ul>
    )
}
