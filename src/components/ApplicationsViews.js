// home page, this is what logged in users will see

import React from "react"
import { Shelf } from "./feed/shelf"
import "./TheWeddingCloset.css"


export const ApplicationViews = () => (
    <>
        <h2>Community Shelves</h2> 
        <article className="feed">
            <Shelf />
           
        </article>
    </>
)
