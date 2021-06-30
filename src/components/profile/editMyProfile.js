import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../UserProvider"
import "./profile.css"
import { useHistory, useParams } from 'react-router-dom';

export const EditMyProfile = () => {
    const { getUserById, updateUser } = useContext(UserContext)

    //for edit, hold on to state of animal in this view
    const [user, setUser] = useState({
        name: "",
        email: "",
        city: "",
        state: "",
        aboutMe: "",
    }) // initial state; happens on first render. is updated after useEffect(setUsers is invoked)
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { userId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newInfo = { ...user }
        //item is an object with properties.
        //set the property to the new value
        newInfo[event.target.name] = event.target.value // bracket notation allows more dynamic
        //update state
        setUser(newInfo)
    }


    const handleUpdateUser = () => {
     
        if (userId) {
            updateUser({
                id: userId,
                email: user.email,
                name: user.name,
                aboutMe: user.aboutMe,
                city: user.city,
                state: user.state
            })
                .then(() => history.push(`/profile/myProfile/${user.id}`))
        }
    }


    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        if (userId === localStorage.getItem("wedding_closet_user")) {
            getUserById(userId)
                .then(individualUserObjectRetrievedFromTheAPI => {
                    setUser(individualUserObjectRetrievedFromTheAPI)
                    setIsLoading(false)
                })
        }
        else {
            history.push(`/profile/myProfile/${localStorage.getItem("wedding_closet_user")}`)
        
        }
    }, [userId])

    //since state controlls this component, we no longer need
    //useRef(null) or ref

    console.log("component rerendered")

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login">
                <h1 className="h3 mb-3 font-weight-normal">Update your profile:</h1>
                <fieldset>
                    <label htmlFor="name"> Name </label>
                    <input type="text" name="name" className="form-control"
                        onChange={handleControlledInputChange} value={user.name} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input type="email" name="email" className="form-control" onChange={handleControlledInputChange} placeholder={user.email} value={user.email} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputCity"> City </label>
                    <input type="city" name="city" className="form-control" onChange={handleControlledInputChange} placeholder={user.city} value={user.city} />
                </fieldset><
                    fieldset>
                    <label htmlFor="inputState"> State </label>
                    <input type="state" name="state" className="form-control" onChange={handleControlledInputChange} placeholder={user.state} value={user.state} />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputAboutMe"> Tell us a little about yourself: </label>
                    <input type="aboutMe" name="aboutMe" className="form-control" onChange={handleControlledInputChange} value={user.aboutMe}/>
                </fieldset>
                <fieldset>
                    <button className="btn btn-primary" onClick={event => {
                        event.preventDefault()
                        handleUpdateUser()
                    }} disabled={isLoading}> update profile </button>
                </fieldset>
            </form>
        </main>
    )
}
