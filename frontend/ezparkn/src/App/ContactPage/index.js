import React, { Component } from 'react';
import './style.css'
class ContactPage extends React.Component{
 constructor(props) {
    super(props);
  }
  render(){


  return (

      <div class="container"> 
      <div>
          <button><a href="/main">Go Back</a></button>
          </div>
      <form>
        <label htmlFor="fname">First Name</label>
       <input type="text" id="fname" name="firstname" placeholder="First name.." />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Last name.." />

        <label htmlFor="users">Choose One</label>
        <select id="users" name="user">
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="subject">Message</label>
        <textarea id="message" name="message" placeholder="Any Message"></textarea>
       
       <input type="submit" value="Submit" />
      </form>
      
      </div>
    
    
    )
  }
}

export default ContactPage;
