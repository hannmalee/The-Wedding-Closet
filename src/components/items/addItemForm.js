import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../UserProvider"
import "./Item.css"
import { useHistory } from 'react-router-dom';
import { parse } from "yargs";

export const AddItemForm = () => {

    const { addItem } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)

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

        const userId = parseInt(item.userId)

        const newItem = {

            userId: userId,
            name: item.name,
            description: item.description,
        }
        addItem(newItem)
            .then(() => history.push("/items"))


    }
    )

    return (

        <h3>hello</h3>

        // <form className="animalForm">
        //     <h2 className="animalForm__title">New Animal</h2>
        //     <fieldset>
        //         <div className="form-group">
        //             <label htmlFor="name">Animal name:</label>
        //             <input type="text" id="name" required autoFocus className="form-control" placeholder="Animal name" value={animal.name} onChange={handleControlledInputChange} />
        //         </div>
        //     </fieldset>
        //     <fieldset>
        //         <div className="form-group">
        //             <label htmlFor="name">Animal breed:</label>
        //             <input type="text" id="breed" required autoFocus className="form-control" placeholder="Animal breed" value={animal.breed} onChange={handleControlledInputChange} />
        //         </div>
        //     </fieldset>
        //     <fieldset>
        //         <div className="form-group">
        //             <label htmlFor="location">Assign to location: </label>
        //             <select name="locationId" id="locationId" className="form-control" value={animal.locationId} onChange={handleControlledInputChange}>
        //                 <option value="0">Select a location</option>
        //                 {locations.map(l => (
        //                     <option key={l.id} value={l.id}>
        //                         {l.name}
        //                     </option>
        //                 ))}
        //             </select>
        //         </div>
        //     </fieldset>
        //     <fieldset>
        //         <div className="form-group">
        //             <label htmlFor="customerId">Customer: </label>
        //             <select name="customer" id="customerId" className="form-control" value={animal.customerId} onChange={handleControlledInputChange}>
        //                 <option value="0">Select a customer</option>
        //                 {customers.map(c => (
        //                     <option key={c.id} value={c.id}>
        //                         {c.name}
        //                     </option>
        //                 ))}
        //             </select>
        //         </div>
        //     </fieldset>
        //     <button className="btn btn-primary" onClick={handleClickSaveAnimal}>
        //         Save Animal
        //     </button>
        // </form>
    )
}

