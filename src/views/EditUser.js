import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { deleteUser } from '../services/userService.js'
import auth from '../services/authService'

export default class EditUser extends Component {

    id = this.props.match.params.id

    handleDelete = async () => {
        try {
            await deleteUser(this.id)
            toast.success('User deleted.')
            auth.logout()
            window.location = '/';
        } catch (err) {
            if(err.response && err.response.status === 404) {
                alert("File already deleted.")
            }
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.handleDelete()} className="btn btn-block btn-danger col-4 mx-auto">Delete User</button>
            </div>
        )
    }
}
