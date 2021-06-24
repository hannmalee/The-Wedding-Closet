import userEvent from "@testing-library/user-event"
import React, { createContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { UserShelf } from "../shelves/userShelf"
import { UserContext } from "../UserProvider"
import "../auth/Login.css"








export const EditMyProfile = () => {

    const userName = useRef()
    const email = useRef()
    const city = useRef()
    const state = useRef()
    const aboutMe = useRef()
    const conflictDialog = useRef()

    const { users, getUsers } = createContext(UserContext)
    const [user, setUser] = useState({ name: {}, city: {}, state: {}, aboutMe: {}, email: {} })

    const { userId } = useParams();

    users.find(user => (user.id === userId))
    
    useEffect(
        getUsers(setUser)
    )
    if (user.id === parseInt(localStorage.getItem("wedding_closet_user"))) {



        return (
            <main style={{ textAlign: "center" }} >

                {/* <dialog className="dialog dialog--password" ref={conflictDialog}>
                    <div>Account with that email address already exists</div>
                    <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
                </dialog> */}

                <form className="form--login">
            {/* // onSubmit=insert function to send updated data */}
                    <h1 className="h3 mb-3 font-weight-normal">edit your profile:</h1>
                    <fieldset>
                        <label htmlFor="userName"> Name </label>
                        <input ref={userName} type="text" name="userName" className="form-control" placeholder={`${user.name}`} required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" name="email" className="form-control" placeholder={`${user.email}`} required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputCity"> City </label>
                        <input ref={city} type="city" name="city" className="form-control" placeholder={`${user.city}`} required />
                    </fieldset><
                        fieldset>
                        <label htmlFor="inputState"> State </label>
                        <input ref={state} type="state" name="state" className="form-control" placeholder={`${user.state}`} required />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputAboutMe"> Tell us a little about yourself: </label>
                        <input ref={aboutMe} type="aboutMe" name="aboutMe" className="form-control" placeholder={`${user.aboutMe}`} required />
                    </fieldset>

                    <fieldset>
                        <button type="submit"> update profile </button>
                    </fieldset>
                </form>
            </main >
        )

    }
}
