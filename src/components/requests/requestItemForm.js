import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "../items/ItemProvider"
import { UserContext } from "../UserProvider"
import { RequestContext } from "./RequestProvider"
import "./request.css"
import { useHistory, useParams } from 'react-router-dom';


export const RequestItemForm = () => {

    const { items, getItems } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)
    const { requests, addRequest } = useContext(RequestContext)
    const [user,setUser] = useState()

    const [request, setRequest] = useState({

        userId: 0,
        recipientId: "",
        requestAccepted: Boolean, 
        text: "",
        itemId: 0,
        read: Boolean, 
        date: Date,

    });
    

    const { itemId } = useParams()
    const history = useHistory();
   
    // const user = users.map(user => user.id === parseInt(userId))
    const item = items.map(item => item.id === parseInt(itemId))
   

    useEffect(() => {
        getUsers()
        .then(() => getItems())
    }, [])

    const handleControlledInputChange = (event) => {

        const newRequest = {...request}

        newRequest[event.target.id] = event.target.value

        setRequest(newRequest)
    }

    

    const handleClickRequestItem = (event => {

        event.preventDefault()



        const newRequest = {

            userId: parseInt(localStorage.getItem("wedding_closet_user")),
            recipientId: user.id,
            requestAccepted: false, 
            text: item.text,
            itemId: item.id,
            read: false, 
            date: Date,
        }
        addRequest(newRequest)
            .then(() => history.push("/"))


    }
    )

    return (
        <>
        <h3>Send request for {user}'s ${item}:</h3>
        <fieldset className="request__message" onChange={handleControlledInputChange}> Message: </fieldset>
        <button onClick={handleClickRequestItem}>Send Request</button>
        </>

    )

}
