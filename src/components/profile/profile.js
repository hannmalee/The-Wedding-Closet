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

    const { users, getUsers } = useContext(UserContext)
    // const { getUserProfiles } = useContext(UserContext)
    const [user, setUser] = useState({items:[]})
    const { items, getItems } = useContext(ItemContext)
    const { userId, itemId } = useParams();
    const [ item, setItem ] = useState([])

    const history = useHistory()

    useEffect(() => {
        const thisProfile = users.find(u => u.id === parseInt(userId))
        setUser(thisProfile)
    }, [users])

    useEffect(() => {
        const thisItem = items.find(item => item.id === parseInt(user.itemId))
        setItem(thisItem)
    }, [items])


    // useEffect(() => {
    //     getUserProfiles()
    // }, [])

    useEffect(() => {
        getUsers()
            .then(() => getItems())
    }, [])


    
    return (
        <>
            <div className="profile">

                <h1>User Profile</h1>

                <>
                    <ul>Name: {user.name}</ul>
                    <ul>Location: {user.city}, {user?.state}</ul>
                    <ul>About Me: {user.aboutMe}</ul>
                    <ul>Email: {user.email}</ul>

                    <h3> {user.name}'s shelf </h3>

                    <div className="items">
                        <ul> {user.items.map(item => {
                            
                        
                              
                            
                            return (
                                <>
                                    <h4>Item: {item.name}</h4>

                                    <button onClick={() => history.push(`/requests/requestItemForm/${item.id}`)}> request item</button>

                                    {/* create link for form */}
                                    <h4>Description: {item.description}</h4>

                                </>
                            )
                        })}</ul>

                    </div>


                </>
                
                    
                
            </div>
        </>
    )

}