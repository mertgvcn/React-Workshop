import React, { Component } from 'react'

//? rcc + tab yapınca bu temel yapı otomatik oluşuyor

class User extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="text"/>
            <button>Gönder</button>
        </form>
      </div>
    )
  }
}

export default User;