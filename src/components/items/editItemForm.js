import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./ItemProvider"
import "./Item.css"
import { useHistory, useParams } from 'react-router-dom';

export const EditItemForm = () => {
    const { getItemById, updateItem } = useContext(ItemContext)

    //for edit, hold on to state of animal in this view
    const [item, setItem] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { itemId } = useParams();
	  const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
      //When changing a state object or array,
      //always create a copy make changes, and then set state.
      const newItem = { ...item }
      //item is an object with properties.
      //set the property to the new value
      newItem[event.target.name] = event.target.value // item.discription or item.name
      //update state
      setItem(newItem)
    }

 
    const handleSaveItem = () => {
        if (itemId){
            updateItem({
                id: item.id, 
                userId: parseInt(localStorage.getItem("wedding_closet_user")),
                name: item.name,
                description: item.description,
            })
            .then(() => history.push(`/profile/myProfile/${parseInt(localStorage.getItem("wedding_closet_user"))}`))
        }
    }
    

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
          getItemById(itemId)
          .then(item => {
              setItem(item)
              setIsLoading(false)
          })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref
    
    

    return (
    
      <form className="itemForm">
        <h2 className="itemForm__title">Update Item</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="itemName">Item name: </label>
            <input type="text" id="itemName"
             name="name" required autoFocus className="form-control"
            placeholder={item.name}
            onChange={handleControlledInputChange}
            defaultValue={item.name}/>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="itemDescription">Item description: </label>
            <input type="text" id="itemDescription" name="description" required autoFocus className="form-control"
            placeholder={item.description}
            onChange={handleControlledInputChange}
            defaultValue={item.description}/>
          </div>
        </fieldset>
        
        <button className="btn btn-primary"
          disabled={isLoading}
          onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveItem()
          }}>Update Item</button>
      </form>
    )
}