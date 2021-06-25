import React, { useState, createContext } from "react"

export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [items, setItems] = useState([])

    const getItems = () => {
        return fetch("http://localhost:8088/items")
            .then(res => res.json())
            // .then((itemData) => setItems(itemData))
    }

    const addItem = itemObj => {
        return fetch("http://localhost:8088/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemObj)
        })
            .then(getItems)
    }

    const deleteItem = itemId => {
        return fetch(`http://localhost:8088/items/${itemId}`, {
            method: "DELETE"
        })
        .then(getItems)
    }

    const getUserItems = userId => {

        return fetch(`http://localhost:8088/items?userId=${userId}`)
            .then(res => res.json())
    }


    return (
        <ItemContext.Provider value={{
            items, getItems, addItem, deleteItem, getUserItems
        }}>
            {props.children}
        </ItemContext.Provider>
    )

}