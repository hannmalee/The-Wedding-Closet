import React, { useState, createContext } from "react"

export const RequestContext = createContext()

export const RequestProvider = (props) => {

    const [requests, setRequests] = useState([])

    const getRequests = () => {
        return fetch("http://localhost:8088/requests?_expand=user&_expand=item")
            .then(res => res.json())
            .then((requestdata) => setRequests(requestdata))
    }

    const addRequest = requestObj => {
        return fetch("http://localhost:8088/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestObj)
        })
            .then(getRequests)
    }


    return (
        <RequestContext.Provider value={{
            requests, getRequests, addRequest
        }}>
            {props.children}
        </RequestContext.Provider>
    )

}