import React, { useEffect } from 'react';
import "./shelf.css";
import { Item } from "../items/Item";
import { useState, useContext } from 'react';
import { ItemContext } from '../items/ItemProvider';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider'




export const UserShelf = ({userObj}) => {

    const { getUserItems } = useContext(ItemContext)
    const [items, setItems] = useState([])

    useEffect(() => {
        getUserItems(userObj.id)
            .then(data => setItems(data))
    }, [] ) // ask monica about why this is needed!


    return (
        <>

        <section className="shelf">
            <h2 className="shelf__user">{userObj.name}</h2>
            <div className="item__list">
                {items.map(item => {

                    return (
                        <>
                        <h3 className= "item__name-list">{item.name}</h3>
                        <h4 className= "item__description-list">{item.description}</h4>
                        </>
                        )
                })}
            </div>
        </section>
        </>
    )
}
