import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { UserContext, } from "../UserProvider"
import "./profile.css"






export const Profile = () => {

    // console.log("5. profile component loaded")

    const { users, getUsers } = useContext(UserContext)
    
    const [user, setUser] = useState({ items: [] })
  
    const { userId } = useParams();
    

    const history = useHistory()

    useEffect(() => {
        console.log("8. useEffect observing 'users'") // runs again after useEffect on line 36
        const thisProfile = users.find(u => u.id === parseInt(userId)) || { items: []}
        setUser(thisProfile)// passing the argument "thisProfile" to setUser
    }, [users])


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