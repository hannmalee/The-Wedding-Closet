import { RequestProvider } from "./RequestProvider"

const Request = () => {

    return (
        <>
        <h3>Send request for {user}'s ${item}:</h3>
        <fieldset className="request__message"> Message: </fieldset>
        <button onClick={<addRequest/>}>Send Request</button>
        </>

    )

}
