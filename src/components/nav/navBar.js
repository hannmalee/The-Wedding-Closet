import React from "react"
import { Link } from "react-router-dom"
import "./navBar.css"
import { UserContext, getUsers } from "../UserProvider"
import { useState, useContext } from "react"

export const NavBar = (props) => {

    const logOut = () => {
        localStorage.removeItem("wedding_closet_user")
    }

    return (
        <>

            <h1 className="nav__header">The Wedding Closet</h1>

            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/">
                        <button className="nav__button">Community Shelves</button></Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to={`/profile/myProfile/${localStorage.getItem('wedding_closet_user')}`}>
                        <button className="nav__button">My Profile</button>
                    </Link>

                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/requests"><button className="nav__button">Request Inbox</button></Link>

                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/login"><button className="nav__button" onClick={logOut}>logout</button></Link>

                </li>

            </ul>

        </>

    )
}
