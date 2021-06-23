import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RequestContext } from "./RequestProvider"
import "./request.css"
import { ItemContext } from "../items/ItemProvider"
import { UserContext } from "../UserProvider"




export const RequestInbox = () => {

    const { requests, getRequests } = useContext(RequestContext)
    // const { getUserProfiles } = useContext(UserContext)
    const { items, getItems } = useContext(ItemContext)
    const [arrayOfRequests, setRequest] = useState([])
    const { users, getUsers } = useContext(UserContext)

    const { requestId } = useParams();

    useEffect(() => {
        getRequests()
        .then(getUsers)
    }, [])

    useEffect(() => {
        getItems()
    }, [])

    useEffect(() => {
        const userRequests = requests.filter(r => r.recipientId === parseInt(localStorage.getItem("wedding_closet_user"))) 
        // || {
        //     userId: {},
        //     recipientId: {}, requestAccepted: {}, text: {}, itemId: {}, read: {}, date: {}
        // }

        setRequest(userRequests)
    }, [])

    // useEffect(() => {
    //     const thisProfile = users.find(u => u.id === userId) || { name: {}, city: {}, state: {}, aboutMe: {}, email: {} }

    //     setUser(thisProfile)
    // }, [userId])


    // useEffect(() => {
    //     getUserProfiles()
    // }, [])


    return (
        <>
            <div className="request">

                <h1>Request Inbox</h1>

                {requests.map((request) => { //only map can return jsx




                    if (request.recipientId === parseInt(localStorage.getItem("wedding_closet_user"))) {

                    // parseInt(localStorage.getItem("the_wedding_closet_user"))) {
                    return (
                        <>
                            {/* <h3>Request from {user.name} to borrow {item.name}</h3>

                                <h4> {request.text} </h4>
                               
                                <radio>see {user.name}'s shelf</radio> */}
                            
                            <div>
                                <h3>Request from {request.user.name} for {request.item.name}</h3>
                                
                                <h4> {request.text} </h4>
                                <button> approve request </button> 
                                <button> deny request </button>
                            </div>
                    
                        </>

                    )
                }


            })}
            </div>
        </>
    )

}