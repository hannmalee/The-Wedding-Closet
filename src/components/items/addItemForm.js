import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../UserProvider"
import "./Item.css"
import { useHistory } from 'react-router-dom';

export const AddItemForm = () => {

    const { addItem } = useContext(ItemContext)
    const { getUsers } = useContext(UserContext)

    const [item, setItem] = useState({

        userId: 0,
        name: "",
        description: "",
    });

    const history = useHistory();


    useEffect(() => {
        getUsers()
    }, [])

    const handleControlledInputChange = (event) => {

        const newItem = { ...item }

        newItem[event.target.id] = event.target.value

        setItem(newItem)
    }

    const handleClickSaveItem = (event => {

        event.preventDefault()

        const userId = parseInt(localStorage.getItem("wedding_closet_user"))

        const newItem = {

            userId: userId,
            name: item.name,
            description: item.description,
        }
        addItem(newItem)
            .then(() => history.push(`/profile/myProfile/${userId}`))


    }
    )

    return (


        <form className="itemForm">
            <h2 className="itemForm__title">New Item</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Item name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="item" value={item.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Item description:</label>
                    <input type="text" id="description" required autoFocus className="form-control" placeholder="description" value={item.description} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveItem}>
                add item
            </button>
        </form>
    )
}

