import React from 'react'

const Navbar = (props) => {


  
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