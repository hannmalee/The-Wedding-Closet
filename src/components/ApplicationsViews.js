// home page, this is what logged in users will see

import React, { useContext } from "react"
import { Redirect, Route } from "react-router-dom"
import { Shelf } from "./shelves/shelf"
import "./TheWeddingCloset.css"
import { ItemProvider } from "./items/ItemProvider"
import { ShelfList } from "./shelves/ShelfList"
import { UserProvider } from "./UserProvider"
import { NavBar } from "./nav/navBar"
import "./nav/navBar.css"
import { UserProfile } from "./profile/profile"
import { UserContext } from "./UserProvider"
import { useEffect } from "react"



export const ApplicationViews = () => {

    // const { users, getUsers } = useContext(UserContext)

    // useEffect (() => {
    //     getUsers()
    // }, [])

    return (
        <>

            <ItemProvider>
                <UserProvider>
                        <Route exact path="/users/">

                        <UserProfile />
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
