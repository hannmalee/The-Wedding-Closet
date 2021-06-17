import React from "react"
import "./shelf.css"
import { Item } from "../items/Item"

export const Shelf = () => (
    <section className="shelf">
        <h3 className="shelf__user">Hannah's Shelf</h3>
            <Item />
            <Item />
    </section>
)
