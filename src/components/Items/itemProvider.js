import React, { useState, createContext } from "react"

export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [items, setItems] = useState([])

    const getItems = () => {
        return fetch("http://localhost:8088/items")
            .then(res => res.json())
            .then((data) => setItems(data))
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


    return (
        <ItemContext.Provider value={{
            items, getItems, addItem
        }}>
            {props.children}
        </ItemContext.Provider>
    )

}