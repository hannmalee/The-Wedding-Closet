import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../UserProvider"
import "./Item.css"
import { useHistory, useParams } from 'react-router-dom';

export const EditItemForm = () => {
    const { items, addItem, getItemById, updateItem } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)

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
      //animal is an object with properties.
      //set the property to the new value
      newItem[event.target.name] = event.target.value
      //update state
      setItem(newItem)
    }

    const user = users.map(user => user.id)
    const handleSaveItem = () => {
        if (itemId){
            updateItem({
                id: item.id, 
                userId: user.id,
                name: item.name,
                description: item.description,
            })
            .then(() => history.push(`/items/${item.id}`))
        }
    }
    

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
      getUsers().then(() => {
        if (itemId){
          getItemById(itemId)
          .then(item => {
              setItem(item)
              setIsLoading(false)
          })
        } else {
          setIsLoading(false)
        }
      })
    }, [])

    //since state controlls this component, we no longer need
    //useRef(null) or ref
    
    

    return (
    
      <form className="itemForm">
        <h2 className="itemForm__title">Update Item</h2>
        <h3>{users.map(user => user.id).name}</h3>
        <fieldset>
          <div className="form-group">
            <label htmlFor="itemName">Item name: </label>
            <input type="text" id="itemName" name="name" required autoFocus className="form-control"
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
          }}>
        {itemId ? <>Update Item</> : <>Add Item</>}</button>
      </form>
    )
}












// export const EditItemForm = () => {
 
    
    
//     return (

//         <form className="form--edit-item" onSubmit={ /* insert function to send data */}>
//             <h1>edit item</h1>
//             <fieldset>
//                 <label htmlFor="itemName"> Item Name </label>
//                 <input ref={itemName} type="text" name="itemName" className="form-control" placeholder="item" required autoFocus />
//             </fieldset>
//             <fieldset>
//                 <label htmlFor="itemDescription"> Item Description </label>
//                 <input ref={itemDescription} type="text" name="itemDescription" className="form-control" placeholder="description" required />
//             </fieldset>
//             <fieldset>
//                 <button type="submit"> submit </button>
//             </fieldset>
//         </form>

//     )

// }