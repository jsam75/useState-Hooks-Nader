import {useState} from "react";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [h1Text, setH1Text] = useState("");

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log (firstName, lastName, email);
        setH1Text(`Hello, ${firstName} ${lastName}! Your email is ${email}.`);
        setFirstName("");
        setLastName("");
        setEmail("");
        // Normally, form submission logic would go here.
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" onInput={handleFirstNameChange} value={firstName} />
            <input type="text" placeholder="Last Name" onInput={handleLastNameChange} value={lastName} />
            <input type="text" placeholder="Email" onInput={handleEmailChange} value={email} />
            <button type="submit">Submit</button>
        </form>

        <h1> {h1Text}</h1>

        </>
    )
}

export default Form;

/* Observations:  DO NOT WRITE THIS WAY IN REAL PROJECTS!
1. The Form component uses the useState hook to manage the state of three input fields: firstName, lastName, and email.
2. Three functions, handleFirstNameChange, handleLastNameChange, and handleEmailChange, are defined to update the 
   respective state variables based on user input.
3. The component renders a form with three input fields and a submit button. Each input field has an onInput event 
   listener that calls the corresponding handler function to update the state.
4. There is a lot of repetition in the code.  This exercise is an intermediate step before learning how to optimize
   such code using a single state object and a more generic input handler function.
5. The submit button defaults to refreshing the page on click.  The handleSubmit function prevents this default behavior
   using e.preventDefault().
6. Upon form submission, the handleSubmit function logs the input values to the console and updates the h1Text state
   to display a greeting message that includes the entered first name, last name, and email.
7. The component renders an h1 element that displays the greeting message based on the h1Text state.
8. We want the form to clear after submission, so the handleSubmit function resets the state variables 
   for the input fields to empty strings.  This is called creating "controlled inputs" in React.

Nader states this is a very convoluted way to write this form component, and that is true.  However, it is done this way to
illustrate the use of multiple useState hooks and individual input handlers before learning more tools for optimization.
*/