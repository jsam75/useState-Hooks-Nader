import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

import Counter from "./assets/warmup/Counter.jsx";
import TextBox from "./assets/ex1/TextBox.jsx";
import Form from "./assets/ex2/Form.jsx";
import Profile from "./assets/ex3/Profile.jsx";
import Counter2 from "./assets/BonusEx/Counter2.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)


/* Notes:
1. The main.jsx file is the entry point of the React application. It imports necessary modules and components.
2. The createRoot function from react-dom/client is used to create a root for rendering the React component tree.
3. The StrictMode component is used to wrap the App component, which helps in identifying potential problems in the application.
4. Various components like Counter, TextBox, Form, Profile, and Counter2 are imported but only the Form component is rendered currently.
5. The index.css import is commented out, indicating that global styles are not being applied at the moment.
6. The Form was the most difficult component to build.  It was done as an intermediate step before
   learning how to use a single state object to manage multiple form inputs.
*/