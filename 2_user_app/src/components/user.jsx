import React, { Component } from 'react'
import PropTypes from 'prop-types'

class user extends Component {
    state = { //stateler böyle tanımlanabiliyor
        isVisible: false
    }

    onClickEvent = (number,e) => { //parametrede e en son yazılır
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    render() {
        const { name, department, salary } = this.props
        const {isVisible} = this.state

        return (
            <div className='col md-8 mb-4 mt-3'>
                <div className='card'>
                    <div className="card-header d-flex justify-content-between pt-3" style={{ backgroundColor: "#E3D2BC" }}
                         onClick={this.onClickEvent.bind(this,34)  /*this'e bağlayıp istediğimiz parametreyi gönderdik*/}
                    >  
                        <h4 className='d-inline'>{name}</h4>
                        <i className='fa-solid fa-user-minus' style={{ cursor: "pointer" }}></i>
                    </div>

                    {
                        isVisible ? <div className="card-body" style={{ backgroundColor: "#F1E7D9" }}>
                                       <p className="card-text">Department : {department}</p>
                                       <p className="card-text">Salary     : {salary}</p>
                                    </div> 
                                  :  null
                    }

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