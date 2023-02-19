import React from 'react'

const ShowData = ({ datos }) => {

    const { name, lastname, email, password, cfpassword } = datos;

    return (
        <div>
            <p>Firstname: {name}</p>
            <p>Lastname: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {cfpassword}</p>
        </div>
    )
}

export default ShowData