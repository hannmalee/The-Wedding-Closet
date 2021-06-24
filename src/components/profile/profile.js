import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext, } from "../UserProvider"
import "./profile.css"
import { UserProvider } from "../UserProvider"
import { Link } from "react-router-dom"
import { Shelf } from "../shelves/shelf"
import { UserShelf } from "../shelves/userShelf"
import { ItemContext } from "../items/ItemProvider"
import { Item } from "../items/Item"





export const Profile = () => {

    const { users, getUsers } = useContext(UserContext)
    // const { getUserProfiles } = useContext(UserContext)
    const [user, setUser] = useState({ name: {}, city: {}, state: {}, aboutMe: {}, email: {} })
    const { items, getItems } = useContext(ItemContext)
    const { userId } = useParams();

    useEffect(() => {
        const thisProfile = users.find(u => u.id === userId) || { name: {}, city: {}, state: {}, aboutMe: {}, email: {} }

        setUser(thisProfile)
    }, [userId])


    // useEffect(() => {
    //     getUserProfiles()
    // }, [])

    useEffect(() => {
        getUsers(getItems)
    }, [])

    return (
        <>
            <div className="profile">

                <h1>User Profile</h1>

                {users.map(user => { //only map can return 

                    if (user.id === parseInt(userId)) {

                        // parseInt(localStorage.getItem("the_wedding_closet_user"))) {
                        return (
                            <>
                                <ul>Name: {user.name}</ul>
                                <ul>Location: {user.city}, {user.state}</ul>
                                <ul>About Me: {user.aboutMe}</ul>
                                <ul>Email: {user.email}</ul>

                                <h3> {user.name}'s shelf </h3>

                                <div className="items">
                                    <ul> {user.items.map(item => {
                                        return (
                                            <>
                                                <h4>Item: {item.name}</h4> <button> request item</button>
                                                {/* create link for form */}
                                                <h4>Description: {item.description}</h4>

                                            </>
                                        )
                                    })}</ul>

                                </div>


                            </>
                        )
                    }
                })}
            </div>
        </>
    )

}