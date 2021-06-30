// list of users

import { Shelf } from "./shelf";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserProvider";
import "./shelf.css"


export const ShelfList = () => {

    //mounted to the dom = first render

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        console.log("useEffect in shelf list")
    }, []) // after component mounts to dom, useEffect is invoked
    console.log("outside of useEffect in shelf list", users) // runs every time the component is rendered
    return (
        <>
            <div className="shelves">

                {users.map(user => {

                    return (
                        <>
                            <Shelf userObj={user} />

                        </>
                    )

                })}
            </div>
        </>
    )
}