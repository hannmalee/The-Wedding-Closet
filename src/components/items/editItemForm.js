import React, { useRef } from "react"




export const EditItemForm = () => {

    return (

        <form className="form--edit-item" onSubmit={ /* insert function to send data */}>
            <h1>edit item</h1>
            <fieldset>
                <label htmlFor="itemName"> Item Name </label>
                <input ref={itemName} type="text" name="itemName" className="form-control" placeholder="item" required autoFocus />
            </fieldset>
            <fieldset>
                <label htmlFor="itemDescription"> Item Description </label>
                <input ref={itemDescription} type="text" name="itemDescription" className="form-control" placeholder="description" required />
            </fieldset>
            <fieldset>
                <button type="submit"> submit </button>
            </fieldset>
        </form>

    )

}