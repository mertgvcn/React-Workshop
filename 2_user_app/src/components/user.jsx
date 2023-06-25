import React, { Component } from 'react'
import PropTypes from 'prop-types'

class user extends Component {
    render() {
        const { name, department, salary } = this.props;
        return (
            <div className='col md-8 mb-4 mt-3'>
                <div className='card'>
                    <div className="card-header d-flex justify-content-between pt-3" style={{backgroundColor: "#E3D2BC"}}>
                        <h4 className='d-inline'>{name}</h4>
                        <i className='fa-solid fa-user-minus' style={{cursor: "pointer"}}></i>
                    </div>

                    <div className="card-body" style={{backgroundColor: "#F1E7D9"}}>
                        <p className="card-text">Department : {department}</p>
                        <p className="card-text">Salary     : {salary}</p>
                    </div>
                </div>
            </div>
        )
    }
}

user.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired
}

user.defaultProps = {
    name: "bilgi yok",
    department: "bilgi yok",
    salary: "bilgi yok"
}

export default user;