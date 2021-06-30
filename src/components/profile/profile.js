import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { UserContext, } from "../UserProvider"
import "./profile.css"
import { UserProvider } from "../UserProvider"
import { Link } from "react-router-dom"
import { Shelf } from "../shelves/shelf"
import { UserShelf } from "../shelves/userShelf"
import { ItemContext } from "../items/ItemProvider"
import { Item } from "../items/Item"
import { RequestItemForm } from "../requests/requestItemForm"






export const Profile = () => {

    console.log("5. profile component loaded")

    const { users, getUsers } = useContext(UserContext)
    // const { getUserProfiles } = useContext(UserContext)
    const [user, setUser] = useState({ items: [] })
    // const { items, getItems } = useContext(ItemContext)
    const { userId } = useParams();
    // const [item, setItem] = useState([])

    const history = useHistory()

    useEffect(() => {
        console.log("8. useEffect observing 'users'")
        const thisProfile = users.find(u => u.id === parseInt(userId)) || { items: []}
        setUser(thisProfile)
    }, [users])



    // useEffect(() => {
    //     getUserProfiles()
    // }, [])

    useEffect(() => {
        console.log("9. useEffect with empty dependency array")
        getUsers()
    }, [])



    return (
        <>
            <div className="profile">

                <h1>User Profile</h1>

                <>
                    <ul>Name: {user.name}</ul>
                    <ul>Location: {user.city}, {user.state}</ul>
                    <ul>About Me: {user.aboutMe}</ul>
                    <ul>Email: {user.email}</ul>

                    <h3 className="userShelf"> {user.name}'s shelf </h3>

                    <div className="items">
                        <ul> {user.items.map(item => {




                            return (
                                <>
                                    <div className="item">
                                        <h4>Item: {item.name}</h4>


                                        <h4>Description: {item.description}</h4>
                                        <button onClick={() => history.push(`/requests/requestItemForm/${item.id}`)}> request item</button>
                                    </div>
                                </>
                            )
                        })}</ul>

                    </div>


                </>



            </div>
        </>
    )

}