import React, { Component } from 'react'
import Navbar from './components/navbar'
import Users from './components/users'

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Mert Güvercin",
        department: "Yazılım Mühendisliği",
        salary: "15000 TL"
      },
      {
        id: 2,
        name: "Ali Güvercin",
        department: "İnsan Kaynakları",
        salary: "1200 TL"
      }

    ]
  }

  render() {
    const users = this.state.users //stateteki usersları aldık

    return (
      <div>
        <div>
          <Navbar title="USER APP" />
          <Users users= {users}/> {/*userları users componentine yazdırıcaz*/}
        </div>
      </div>
    )
  }
}

export default App

