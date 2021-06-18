// home page, this is what logged in users will see

import React from "react"
import { Redirect, Route } from "react-router-dom"
import { Shelf } from "./feed/shelf"
import "./TheWeddingCloset.css"


export const ApplicationViews = () => (
    <>
        <Route exact path="/">
            <h2>Community Shelves</h2>
            <article className="feed">
                <Shelf />

            </article>
        </Route>
    </>
)
