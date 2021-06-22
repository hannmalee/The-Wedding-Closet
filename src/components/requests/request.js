import { RequestProvider } from "./RequestProvider"
import { ItemContext } from "../items/ItemProvider"
import { createContext } from "react"

export const Request = () => {

    const {items, getItems } = createContext(ItemContext)

    // return (
    //     <>
    //     <h3>Send request for {user}'s ${item}:</h3>
    //     <fieldset className="request__message"> Message: </fieldset>
    //     <button onClick={<addRequest/>}>Send Request</button>
    //     </>

    // )

}
