// home page, this is what logged in users will see

import React from "react"
import { Redirect, Route } from "react-router-dom"
import { Shelf } from "./shelves/shelf"
import "./TheWeddingCloset.css"
import { ItemProvider } from "./items/ItemProvider"


export const ApplicationViews = () => {

    return (
    <>

        <ItemProvider>
        <Route exact path="/">
            <h2>Community Shelves</h2>
            <article className="feed">
                <Shelf />

            </article>
        </Route>
        </ItemProvider>
    </>
    )
}
    