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

                <h1>{user.name}'s Profile</h1>

                <>
                <div className="profile__info">

                    <h2>Name: {user.name}</h2>
                    <h2>Location: {user.city}, {user.state}</h2>
                    <h2>About Me: {user.aboutMe}</h2>
                    <h2>Email: {user.email}</h2>
                </div>


                    <div className="items">
                        <h3 className="userShelf"> {user.name}'s Shelf: </h3>
                        <ul> {user.items.map(item => {
                            
                            
                            


                            return (
                                <>
                                    <div className="item">
                                        <h4>Item: {item.name}</h4>


                                        <h4>Description: {item.description}</h4>
                                        <button className="nav__button" onClick={() => history.push(`/requests/requestItemForm/${item.id}`)}> request item</button>
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