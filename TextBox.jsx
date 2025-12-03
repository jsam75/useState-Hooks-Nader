import { useState } from "react";

function TextBox() {
    const [text, setText] = useState("");

    function handleInputChange (e) {
        //console.log(e.target.value);
        setText(e.target.value);
    }

    return (
        <>
        <h1>{text}</h1>
        <input type="text" onInput={handleInputChange} />
        </>
    )
}

export default TextBox;

/* Observations:
1. The TextBox component uses the useState hook to manage the text state.  Without it, the text would not update as the user types.
2. The handleInputChange function is defined to update the text state based on user input.
3. The component renders an h1 element that displays the current text and an input field where users can type.
4. The onInput event listener is used to call handleInputChange whenever the input value changes.
5. The console.log statement inside handleInputChange is commented out, but it can be useful for debugging 
   to see the current input value.  I used it before writing the setText line.
*/
