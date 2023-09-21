import React, { useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import UserCard from './Components/UserCard/UserCard';

const App = () => {

  //Declaring state variable 'users' that will hold the user data fetched from an API.For now I am initializing it with an empty array[].
  const [users, setUsers] = useState([]);
  // Declaring loading state variable that will keep track of whether the application is currently fetching data (true) or not (false).
  const [loading, setLoading] = useState(false);

  //Declaring variable to store the API url
  const APIurl = 'https://reqres.in/api/users?page=1';
  
  
  const fetchUsers = async () => {
    //when fetching the data from API loading state will be true and Loading... message will displayed
    setLoading(true);

    // I am using built-in JavaScript function that allows
    //us to delay the execution of a function or a block of code for a specified amount of time, 
    //measured in milliseconds.
    //syntax : setTimeout(callbackFunction, delayInMilliseconds);


    setTimeout(

      //async () => { ... } This part defines an anonymous arrow function that is marked as async. The async keyword indicates that this function will always return a promise, and it allows us to use await inside it.
      //since fetching operation takes some time till then we tell react to render the rest elements of the file
      //async arrow function fetches data from an API after a 2-second delay. It uses await to handle the asynchronous nature of the fetch operation and the JSON parsing of the response.
      async()=>{


        try {
          const response = await fetch(APIurl);   //fetching the data from API or I can use thirdparty package 'axios' as well to fetch the data from provided API

          if (response.ok) 
          {
            const usersData = await response.json();   //The response comes in Object form so extracting the object in JSON format
            // console.log(usersData);
            setUsers(usersData.data);                  //Updating the state variable Users with the data that I have fetched from the API

            
          } 
          else {
            console.error('Failed to fetch user data');  //If any error encountered while fetching the data then displaying error message in console
          }
        } 
        // When an error occurs in a try block, JavaScript automatically creates an error object and assigns it to the variable specified in the catch block's parameter. This variable is commonly named error, so i am also using 'error' but you can choose any valid variable name you prefer.
        
        catch (error) {
          console.error('Error fetching user data', error);
        }

        //I have set loading stat back to false using setLoading(false). 
        //This indicates that the loading process is complete, and the application is no longer in a loading state.
        //After data has been fetched I am removing the Loading... message after 2 seconds
        setLoading(false);


      },2000

    );

    
  };

  return (
    <div className="App">
      <Navbar PassedasProps={fetchUsers} />                       {/*  passing a prop called "PassedasProps" with the value of the fetchUsers function. This allows the <Navbar> component to call fetchUsers when a button is clicked Later. */}
      {loading ? <p className='loading'>Loading...</p> : <UserCard users={users} />}  {/* This is a conditional rendering statement. It checks the value of the loading state variable. If loading is true, it renders a loading message <p>Loading...</p>. If loading is false, it renders the <UserCard> component and passes it the users prop, which contains the user data fetched from the API. */}
    </div>
  );
}

export default App;
