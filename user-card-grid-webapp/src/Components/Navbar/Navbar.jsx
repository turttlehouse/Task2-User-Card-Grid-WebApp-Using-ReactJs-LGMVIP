import React from 'react'
import './Navbar.css'



const Navbar = (props) => {


  /* 
The Navbar functional component is returning a JSX structure, which represents the user interface (UI) elements that should be rendered by this component when it's used */

  /* return (...): This block of code is the JSX (JavaScript XML) representation of the component's rendering. It defines what the component should render when it's used. */
  /* JSX Javascript xml allows us to write in html-like code in js file */
  return (
    /* using React Fragments - Fragments enable us to return multiple elements from a component without wrapping them in a parent element. */
    <>
     <div className='Navbar'>
        <h1>UserHub</h1>

        <button className='get-users-btn' onClick={props.PassedasProps}>Get Users</button>
    
    </div>
     
    </>
  )
}

export default Navbar






















/* 

Conditional Rendering: Fragments are handy for conditional rendering when we want to return different elements based on a condition.


function Greeting({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
    </>
  );
}
*/