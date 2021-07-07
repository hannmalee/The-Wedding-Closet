import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { RequestContext } from "./RequestProvider"
import "./request.css"
import { ItemContext } from "../items/ItemProvider"
import { UserContext } from "../UserProvider"





export const RequestInbox = () => {

    const { requests, getRequests, approveRequest } = useContext(RequestContext)
    // const { getUserProfiles } = useContext(UserContext)
    const { items, getItems } = useContext(ItemContext)
    const [request, setRequest] = useState([])
    const { users, getUsers } = useContext(UserContext)
    const history = useHistory()

    const { requestId } = useParams();

    useEffect(() => {
        getRequests()
            .then(getUsers)
            .then(setRequest)
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

    // const handleClickApproveRequest = (event => {

    //     // const userId = parseInt(localStorage.getItem("wedding_closet_user"))
    

        const handlClickApproveRequest = {

            if(requestId) {
                approveRequest({
                    userId: request.userId,
                    recipientId: request.recipientId,
                    requestAccepted: true,
                    text: request.text,
                    itemId: request.itemId,
                    read: true,
                    date: request.date
                })
            
                .then(() => history.push("/requests"))
            }
        




        }
    


    return (
        <>


            <div className="requests">

                <h2 className="request-header">Request Inbox</h2>

                {requests.map((request) => { //only map can return jsx




                    if (request.recipientId === parseInt(localStorage.getItem("wedding_closet_user"))) {

                        // parseInt(localStorage.getItem("the_wedding_closet_user"))) {
                        return (
                            <>
                                <div className="request">
                                    {/* <h3>Request from {user.name} to borrow {item.name}</h3>

                                            <h4> {request.text} </h4>

                                            <radio>see {user.name}'s shelf</radio> */}

                                    <div>
                                        <h3>Request from {request.user.name} for your {request.item.name}:</h3>

                                        <h4> {request.text} </h4>
                                        {/* <button className="nav__button" onClick={handlClickApproveRequest}>approve request </button> */}
                                        {/* <button className="nav__button"> deny request </button> */}
                                    </div>
                                </div>

                            </>

                        )
                    }


                })}
            </div>
        </>
    )

}