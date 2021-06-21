// home page, this is what logged in users will see

import React from "react"
import { Redirect, Route } from "react-router-dom"
import { Shelf } from "./shelves/shelf"
import "./TheWeddingCloset.css"
import { ItemProvider } from "./items/ItemProvider"
import { ShelfList } from "./shelves/ShelfList"
import { UserProvider } from "./shelves/UserProvider"
import { NavBar } from "./nav/navBar"
import "./nav/navBar.css"


export const ApplicationViews = () => {

    return (
        <>

            <ItemProvider>
                <UserProvider>

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
