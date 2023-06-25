import React, { Component } from 'react'
import PropTypes from 'prop-types' //propların data type'ını ayarlamak için gerekli

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

User.propTypes = { //3 parametremizin de string olmasını ve zorunlu olmasını istedik
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired 
}

User.defaultProps = { //eğer eksik parametre gönderirsek hata vermicek burdan alıcak.
    name : "Bilgi Yok",
    department : "Bilgi Yok",
    salary : "Bilgi Yok"
}

export default User;