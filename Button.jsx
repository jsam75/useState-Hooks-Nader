function Button ({setLoggedInText}) {

    function handleClick() {
        setLoggedInText(prevText => prevText === "Logged In" ? "Logged Out" : "Logged In");
    }
    
    return (
        <button onClick={handleClick}>Toggle Login</button>

    )
}
export default Button;

/* Observations:
1. The Button component receives setLoggedInText as a prop from the Profile component to modify the loggedInText state.
2. The handleClick function is defined to toggle the loggedInText between "Logged In" and "Logged Out" using the previous state.
3. The component renders a button that, when clicked, triggers the handleClick function to update the login state.
4. The use of a functional update in setLoggedInText ensures that the latest state is used when toggling the text.
*/