// home page, this is what logged in users will see

import React, { useContext } from "react"
import { Redirect, Route, useParams } from "react-router-dom"
import { Shelf } from "./shelves/shelf"
import "./TheWeddingCloset.css"
import { ItemProvider } from "./items/ItemProvider"
import { ShelfList } from "./shelves/shelfList"
import { UserProvider } from "./UserProvider"
import { NavBar } from "./nav/navBar"
import "./nav/navBar.css"
import { Profile } from "./profile/profile"
import { UserContext } from "./UserProvider"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export const ApplicationViews = () => {

    // const { users , getUsers}  = useContext(UserContext)

    // useEffect (() => {
    //     getUsers()
    // }, [])

    return (
        <>

            <ItemProvider>
                <UserProvider>
                        <Route exact path="/profile/:userId(\d+)">

                        <Profile />
                        </Route>
                    <Route exact path="/">
                        <NavBar />
                        <h2>Community Shelves</h2>
                        <article className="feed">

                            <ShelfList />

                        </article>
                    </Route>
                </UserProvider>
            </ItemProvider>
        </>
    )
}
