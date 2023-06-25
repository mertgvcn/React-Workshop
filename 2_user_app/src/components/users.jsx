import React, { Component } from 'react'
import User from './user'

class users extends Component {
    render() {
        const { users } = this.props //appten gelen usersları yakaladık

        return (
            <div>
                {
                    users.map((user) => { //users'ları mapleyip heri birininin bilgilerini user componentına aktardık
                        return (
                            <User
                                key={user.id}
                                name={user.name}
                                department={user.department}
                                salary={user.salary}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default users