import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RequestContext } from "./RequestProvider"
import "./request.css"
import { RequestProvider } from "./RequestProvider"
import { ItemContext } from "../items/ItemProvider"




export const RequestInbox = () => { 

    const { requests, getRequests } = useContext(RequestContext)
    // const { getUserProfiles } = useContext(UserContext)
    const { items, getItems } = useContext(ItemContext)

    const { requestId } = useParams();

    useEffect(() => {
        const thisRequest = request.find(r => r.id === requestId) || { userId: {}, recipientId: {}, requestAccepted: {}, text: {}, itemId: {}, read: {}, date: {} }

        setRequest(thisRequest)
    }, [userId])

    // useEffect(() => {
    //     const thisProfile = users.find(u => u.id === userId) || { name: {}, city: {}, state: {}, aboutMe: {}, email: {} }

    //     setUser(thisProfile)
    // }, [userId])


    // useEffect(() => {
    //     getUserProfiles()
    // }, [])

    useEffect(() => {
        getRequests()
    }, [])

    useEffect(() => {
        getItems()
    }, [])

    return (
        <>
            <div className="request">

                <h1>Request Inbox</h1>

                {requests.map(request => { //only map can return jsx

                    if (recipientId === parseInt(localStorage.getItem("the_wedding_closet_user"))) {

                        // parseInt(localStorage.getItem("the_wedding_closet_user"))) {
                        return (
                            <>
                                {/* <h3>Request from {user.name} to borrow {item.name}</h3>

                                <h4> {request.text} </h4>
                               
                                <radio>see {user.name}'s shelf</radio> */}
                                <h3>Request from person to borrow item</h3>

                                <h4> message text </h4>

                                <button type="radio"> approve request </button>
                                <button type="radio"> deny request </button>
                                <button>send response</button>
                            </>
                        )
                    }
                })}
            </div>
        </>
    )

}