import React, { useState, createContext } from "react"

export const UserContext = createContext()

export const UserProvider = (props) => {

    
    const [users, setUsers] = useState([])
    
    console.log("7. userProvider component loaded", users)
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

    // const getUserById = (userId) => {
    //     return fetch (`http://localhost:8088/users/${userId}?_embed=requests`)
    //     .then (res => res.json())
    // }

    const getUserById = (userId) => {
        return fetch (`http://localhost:8088/users/${userId}`)
        .then (res => res.json())
    }

    const updateUser = user => {
        return fetch(`http://localhost:8088/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(getUsers)


    }



    return (
        <UserContext.Provider value={{
            users, getUsers, getUserProfiles, getUserById, updateUser
        }}>
            {props.children}
        </UserContext.Provider>
    )

}