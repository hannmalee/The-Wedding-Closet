// list of users

import { Shelf } from "./shelf";
import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserProvider";
import "./shelf.css"


export const ShelfList = () => {

    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
    }, [])

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