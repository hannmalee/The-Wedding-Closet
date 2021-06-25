// home page, this is what logged in users will see

import React, { useContext } from "react"
import { Redirect, Route, useParams } from "react-router-dom"
import { Shelf } from "./shelves/shelf"
import "./TheWeddingCloset.css"
import { ItemProvider } from "./items/ItemProvider"
import { ShelfList } from "./shelves/shelfList"
import { UserProvider } from "./UserProvider"
import { NavBar } from "./nav/navBar"
import "./nav/navBar.css"
import { Profile } from "./profile/profile"
import { UserContext } from "./UserProvider"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { RequestInbox } from "./requests/requestInbox"
import { RequestProvider } from "./requests/RequestProvider"
import { UserShelf } from "./shelves/userShelf"
import { EditMyProfile } from "./profile/editMyProfile"
import { MyProfile } from "./profile/myProfile"
import { AddItemForm } from "./items/addItemForm"
import { EditItemForm } from "./items/editItemForm"


export const ApplicationViews = () => {

    // const { users , getUsers}  = useContext(UserContext)

    // useEffect (() => {
    //     getUsers()
    // }, [])

    return (
        <>
            <ItemProvider>
                <UserProvider>
                    <RequestProvider>
                        <NavBar />
                        <Route exact path="/shelves/shelf/:userId(\d+)">
                            <Shelf />
                        </Route>
                        <Route exact path="/items/edit/:itemId(\d+)">
                            <EditItemForm />
                        </Route>
                        <Route exact path="/items/create">
                            <AddItemForm />
                        </Route>
                        <Route exact path="/profile/:userId(\d+)">
                            <Profile />
                        </Route>
                        <Route exact path="/profile/myProfile/:userId(\d+)">
                            <MyProfile />
                        </Route>
                        <Route exact path="/profile/editMyProfile/:userId(\d+)">
                            <EditMyProfile />
                        </Route>
                        <Route exact path="/requests/">
                            <RequestInbox />
                        </Route>
                        <Route exact path="/">
                            <h2>Community Shelves</h2>
                            <article className="feed">

                                <ShelfList />

                            </article>
                        </Route>
                    </RequestProvider>
                </UserProvider>
            </ItemProvider>
        </>
    )
}
