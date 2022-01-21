import React from 'react'
import { toast } from 'react-toastify'
import Joi from 'joi-browser'
import { deleteUser } from '../services/userService.js'
import auth from '../services/authService'
import Form from './../components/common/Form';

export default class EditUser extends Form {
    state = {
        errors: {},
        data: { name: '', email: ''}
    }

    schema = {
        name: Joi.string().required().label('Username'),
        email: Joi.string().required().email().label('Email')
    }

    id = this.props.match.params.id

    componentDidMount = () => {
        if (this.props.user) {const newData = {...this.state.data}
            for (const attr in newData) { newData[attr] = this.props.user[attr]}
            this.setState({
                data: newData
            })}
    }

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
                <h1 className="mx-auto mb-5">Edit User</h1>
                <button onClick={()=>this.handleDelete()} className="btn btn-block btn-danger col-4 mx-auto mt-4">Delete User</button>
                <form onSubmit={this.handleSubmit} className='col-6 mx-auto'>
                    {/* {this.renderInput('name', 'Username')}
                    {this.renderInput('email', 'Email')} */}
                </form>
            </div>
        )
    }
}
