import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext, } from "../UserProvider"
import "./profile.css"
import { UserProvider } from "../UserProvider"





export const MyProfile = () => {

    const { users, getUsers } = useContext(UserContext)
    // const { getUserProfiles } = useContext(UserContext)
    const [user, setUser] = useState({ name: {}, city: {}, state: {}, aboutMe: {}, email: {} })

    const { userId } = useParams();

    useEffect(() => {
        const thisProfile = users.find(u => u.id === userId) || { name: {}, city: {}, state: {}, aboutMe: {}, email: {} }

        setUser(thisProfile)
    }, [userId])


    // useEffect(() => {
    //     getUserProfiles()
    // }, [])

    useEffect(() => {
        getUsers()
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
                                <h3>Name: {user.name}</h3>
                                <h3>Location: {user.city}, {user.state}</h3>
                                <h3>About Me: {user.aboutMe}</h3>
                                <h3>Email: {user.email}</h3>

                                <button>See {user.name}'s Shelf</button>


                            </>
                        ) 
                    }
                })}
            </div>
        </>
    )

}