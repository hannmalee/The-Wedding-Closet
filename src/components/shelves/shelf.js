import React, { useEffect } from 'react';
import "./shelf.css";
import { Item } from "../items/Item";
import { useState, useContext } from 'react';
import { ItemContext } from '../items/ItemProvider';


export const Shelf = () => {

    const { getItems } = useContext(ItemContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        getItems()
            .then(data => setItems(data))
    }) // ask monica about why this is needed!

    return (
        
        <section className="shelf">
            <h3 className="shelf__user"></h3>
            <div className="item__list">
                {items.map(item => {
                    return (
                        <>
                        <h3>{item.name}</h3>
                        <h4>{item.description}</h4>
                        </>
                        )
                })}
            </div>
        </section>
    )
}
