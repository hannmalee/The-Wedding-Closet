import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext, } from "../UserProvider"
import "./profile.css"
import { UserProvider } from "../UserProvider"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"





export const MyProfile = () => {

    const history = useHistory();

    const { users, getUsers } = useContext(UserContext)
    // const { getUserProfiles } = useContext(UserContext)
    const [user, setUser] = useState({ name: {}, city: {}, state: {}, aboutMe: {}, email: {} })
    

    const { userId } = useParams();

    // const currentUser = localStorage.getItem("wedding_closet_user")

    useEffect(() => {
        const thisProfile = users.find(u => u.id === parseInt(localStorage.getItem("wedding_closet_user"))) || { name: {}, city: {}, state: {}, aboutMe: {}, email: {} }

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

                {users.map(user => { //only map can return JSX

                    if (user.id === parseInt(localStorage.getItem("wedding_closet_user"))) {


                        return (
                            <>
                                <h3>Name: {user.name}</h3>
                                <h3>Location: {user.city}, {user.state}</h3>
                                <h3>About Me: {user.aboutMe}</h3>
                                <h3>Email: {user.email}</h3>

                                <h3> {user.name}'s shelf </h3>

                                <div className="items">
                                    <ul> {user.items.map(item => {
                                        return (
                                            <>
                                                <h4>Item: {item.name}</h4> <button> edit</button><button> delete</button>
                                                {/* create form for editing,deleting */}
                                                <h4>Description: {item.description}</h4>

                                            </>
                                        )
                                    })}</ul>

                                </div>
                                <div>

                                <button onClick={
                                    () => history.push("/items/create")
                                }> add item </button>
                                </div>

                            </>
                        )
                        
                    }
                })}
            </div>
        </>
    )

}