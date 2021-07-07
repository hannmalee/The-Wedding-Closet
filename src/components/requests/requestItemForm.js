import React, { useContext, useEffect, useState } from "react"
import { ItemContext } from "../items/ItemProvider"
import { UserContext } from "../UserProvider"
import { RequestContext } from "./RequestProvider"
import "./request.css"
import { useHistory, useParams } from 'react-router-dom';


export const RequestItemForm = () => {

    const { getItemById, getItems } = useContext(ItemContext)
    const { users, getUsers, getUserById } = useContext(UserContext)
    const { requests, addRequest } = useContext(RequestContext)
    const [user, setUser] = useState({ item: {} })
    const [item, setItem] = useState({})


    const { itemId } = useParams()

    const [request, setRequest] = useState({

        userId: 0,
        recipientId: "",
        requestAccepted: false,
        text: "",
        itemId: 0,
        read: false,
        date: Date.now(),

    });

    // useEffect (() => {
    //     const thisRequest = requests.find(r => r.id === parseInt(itemId))
    //     setRequest(thisRequest)
    // },[])

    // useEffect (() => {
    //     const thisUser = users.find(user => user.id === parseInt(userId))
    //     setUser(thisUser)
    // },[])

    const history = useHistory();

    // const user = users.map(user => user.id === parseInt(userId))
    // const item = items.map(item => item.id === parseInt(itemId))


    useEffect(() => {
        getUsers().then(getItems)

        // .then(() => {
        // if (itemId) {
        //     console.log("hey i'm running!")
        //     getItemById(itemId)
        //         .then(item => {
        //             setItem(item)
        //         })

        // })
    }, [itemId])

    useEffect(() => {
        if (item.userId) {
            getUserById(item.userId).then((userObj) => setUser(userObj))
        }
        // const findItemUser = users.find(user => user.id === item.userId) || { item: {} }
        // setUser(findItemUser)
    }, [item])

    useEffect(() => {

        getItemById(itemId)
            .then(item => {
                setItem(item)
            })

    }, [users])

    // .then(() => {
    //     if (users.map(requestRecipientId => user.id === item.userId)) {
    //         setRequestRecipientId(requestRecipientId)
    //     }
    //     console.log(requestRecipientId)



    const handleControlledInputChange = (event => {


        const newRequest = { ...request }

        newRequest[event.target.id] = event.target.value

        setRequest(newRequest)
    })




    const handleClickRequestItem = (event => {

        event.preventDefault()

        const newRequest = {

            userId: parseInt(localStorage.getItem("wedding_closet_user")),
            recipientId: user.id,
            requestAccepted: false,
            text: request.text,
            itemId: item.id,
            read: false,
            date: Date.now(),
        }
        addRequest(newRequest)
            .then(() => history.push("/"))


    })




    return (
        <>
        <div className="request__message">

            <h2>Send request for {user.name}'s {item.name}:</h2>
            <fieldset onChange={handleControlledInputChange}>
                <label htmlFor="message">compose message:</label>
                <input type="text" id="text" required autoFocus className="form-control" placeholder="input request message" value={request.text} onChange={handleControlledInputChange} />
            </fieldset>
            <button onClick={handleClickRequestItem}>Send Request</button>
        </div>
        </>

    )


}