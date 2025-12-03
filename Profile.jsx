import {useState} from "react";
import Button from "./Button";

function Profile() {
    const [loggedInText, setLoggedInText] = useState("Logged In");

    return (
        <>
        <p>{loggedInText}</p>
        <Button setLoggedInText={setLoggedInText} />
        </>

        
    )
}

export default Profile;

/* Observations:
1. The Profile component uses the useState hook to manage the loggedInText state. Without it, the text would not update when toggled.
2. The Button component is imported and used within Profile, receiving setLoggedInText as a prop to allow it to modify the state.
3. The component renders a paragraph displaying the current loggedInText and includes the Button component to toggle the login state.
4. The use of a separate Button component helps in keeping the code modular and reusable.
*/