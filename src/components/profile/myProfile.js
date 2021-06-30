import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext, } from "../UserProvider"
import "./profile.css"
import { UserProvider } from "../UserProvider"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { ItemContext } from "../items/ItemProvider"






export const MyProfile = () => {

    const history = useHistory();

    const { users, getUsers } = useContext(UserContext)
    // const { getUserProfiles } = useContext(UserContext)
    const [user, setUser] = useState({ name: {}, city: {}, state: {}, aboutMe: {}, email: {} })
    const { items, getItems, deleteItem } = useContext(ItemContext)

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
                            <div className="profile__info">

                                <h3>Name: {user.name}</h3>
                                <h3>Location: {user.city}, {user.state}</h3>
                                <h3>About Me: {user.aboutMe}</h3>
                                <h3>Email: {user.email}</h3>

                                <button onClick={() => history.push(`/profile/editMyProfile/${parseInt(localStorage.getItem("wedding_closet_user"))}`)}>
                                edit my profile </ button>

                                

                            </div>

                                <div className="items">
                                <h2> {user.name}'s shelf </h2>
                                    <ul> {user.items.map(item => {

                                        const handleDelete = () => {
                                            deleteItem(item.id)
                                                .then(() => {
                                                    history.push(`/profile/myProfile/${parseInt(localStorage.getItem("wedding_closet_user"))}`)
                                                })
                                                .then(getUsers)
                                        }

                                        
                                        
                                        return (


                                            <>


                                                <div className="item">

                                                <h4>Item: {item.name}</h4> <button className="nav__button" onClick={() => {
                                                    history.push(`/items/edit/${item.id}`)
                                                }}> edit</button><button className="nav__button" onClick={handleDelete}> delete</button>
                                                {/* create form for editing,deleting */}
                                                <h4>Description: {item.description}</h4>

                                                </div>
                                            </>
                                        )
                                    })}</ul>

                                </div>
                                <div className="addItemButton">

                                    <button className="nav__button" onClick={
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