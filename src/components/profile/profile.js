import React, { useContext, useEffect } from "react"
import { UserContext, } from "../UserProvider"
import "./profile.css"





export const UserProfile = () => {

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <>
        {/* <Route exact path=1 */}
            <div className="profile">

                {users.find(user => {

                    return (
                        <>
                            <div>Name: {user.name}</div>
                            <div>Location: {user.city}, {user.state}</div>
                            <div>About Me: {user.aboutMe}</div>
                            <div>Email: {user.email}</div>
                        </>
                    )
                })}
            </div>
        </>
    )

}