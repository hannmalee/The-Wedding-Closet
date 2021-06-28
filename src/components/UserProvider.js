import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {
    
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users?_embed=items")
            .then(res => res.json())
            .then((userData) => setUsers(userData))
        }

    const getUserProfiles = (id) => {

        return fetch (`http://localhost:8088/users/${id}`)
            .then (res => res.json())
            // .then ((userProfileData) => setUsers(userProfileData))
    
    }

    const getUserById = (userId) => {
        return fetch (`http://localhost:8088/users/${userId}?_embed=request`)
        .then (res => res.json())
    }



    return (
        <UserContext.Provider value={{
            users, getUsers, getUserProfiles, getUserById
        }}>
            {props.children}
        </UserContext.Provider>
    )

}