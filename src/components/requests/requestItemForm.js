import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "../items/ItemProvider"
import { UserContext } from "../UserProvider"
import { RequestContext } from "./RequestProvider"
import "./request.css"
import { useHistory, useParams } from 'react-router-dom';


export const RequestItemForm = () => {

    const { getItemById, getItems } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)
    const { requests, addRequest } = useContext(RequestContext)
    const [user,setUser] = useState([])
    const [ item, setItem ] = useState({})
    
    
    const { itemId } = useParams()
    
    
    const [request, setRequest] = useState({
        
        userId: 0,
        recipientId: "",
        requestAccepted: Boolean, 
        text: "",
        itemId: 0,
        read: Boolean, 
        date: Date,
        
    });
    
    useEffect (() => {
        const thisRequest = requests.find(r => r.id === parseInt(itemId))
        setRequest(thisRequest)
    },[])

    // useEffect (() => {
    //     const thisUser = users.find(user => user.id === parseInt(userId))
    //     setUser(thisUser)
    // },[])

    const history = useHistory();
   
    // const user = users.map(user => user.id === parseInt(userId))
    // const item = items.map(item => item.id === parseInt(itemId))
   

    useEffect(() => {
        getUsers().then(getItems).then(() => {
            if (itemId) {
                getItemById(itemId)
                .then(item => {
                    setItem(item)
                })
            }
            

        })
        // .then(() => getItems())
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
            text: user.item.text,
            itemId: user.item.id,
            read: false, 
            date: Date,
        }
        addRequest(newRequest)
            .then(() => history.push("/"))


    }
    )

    
   const findItemUser = users.find(user => user.id === item.userId)

    return (
        <>
        <h3>Send request for {findItemUser.name}'s {item.name}:</h3>
        <fieldset className="request__message" onChange={handleControlledInputChange}> Message: 
        
        </fieldset>
        <button onClick={handleClickRequestItem}>Send Request</button>
        </>

    )

}
