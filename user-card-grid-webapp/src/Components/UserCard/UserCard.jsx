import React from 'react'
import './UserCard.css'

const UserCard = ( {users}) => {


  return (
    <div className='user-grid'>
      {users.length > 0 ? (

        users.map((user) => (

          <div className='user-card' key={user.id}>
            <img src = {user.avatar} alt={`${user.first_name}'s avatar`} />
            
            <h2>{user.first_name} {user.last_name}</h2>

            <p>Email: {user.email}</p> 
          </div>
        ))

  ):(null)}

      </div>
  );
};

export default UserCard

 /* accessing the email property of the user object  */


/* `${}` within backticks is used for template literals. */

/* {}it is not a template literal but These curly braces are used in JSX (JavaScript XML) to indicate that we are embedding JavaScript code within the HTML-like structure. Anything inside these braces is treated as JavaScript. */
