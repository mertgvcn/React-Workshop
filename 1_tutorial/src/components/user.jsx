import React, { Component } from 'react'

//? class component -> state ve prop alabilen dinamik componentlardır 
//? rcc + tab yapınca bu temel yapı otomatik oluşuyor

class User extends Component {
  render() {

    //Destructing ile bu class'a ait propsları çektik. 
    const {name,department,salary} = this.props; 

    return (
      <div>
        <ul>
            <li>Name       : {name}</li>
            <li>Department : {department}</li>
            <li>Salary     : {salary}</li>
        </ul>
      </div>
    )
  }
}

export default User;