import React, { useState } from 'react';


const UserForm = ({ datos, setDatos, limpiar }) => {

    /*const initalErros = {
        nameError: "First name must have at least 2 characters",
        lasNameError: "Lastname must have at least 2 characters",
        emailError: "Email must have at least 5 characters",
        passwordError: "Password must have at least 8 characters",
        cfPasswordError: "Passwords must match"
    }*/

    const [error, setError] = useState({
        nameError: <br />,
        lastNameError: <br />,
        emailError: <br />,
        passwordError: <br />,
        cfPasswordError: <br />
    });

    const { nameError, lastNameError, emailError, passwordError, cfPasswordError } = error;
    const { name, lastname, email, password, cfpassword } = datos;

    const handleDatos = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value, });
        if (e.target.name === 'name') {
            if (e.target.value.length > 0 && e.target.value.length < 2) {
                setError({ ...error, nameError: <p style={{ color: 'red' }}>Name must have at least 2 characters</p> });
            } else { setError({ ...error, nameError: <br /> }); }

        } else if (e.target.name === 'lastname') {
            if (e.target.value.length > 0 && e.target.value.length < 2) {
                setError({ ...error, lastNameError: <p style={{ color: 'red' }}>Lastname must have at least 2 characters</p> });
            } else { setError({ ...error, lastNameError: <br /> }); }

        } else if (e.target.name === 'email') {
            if (e.target.value.length > 0 && e.target.value.length < 5) {
                setError({ ...error, emailError: <p style={{ color: 'red' }}>Email must have at least 5 characters</p> });
            } else { setError({ ...error, emailError: <br /> }); }

        } else if (e.target.name === 'password') {
            if (e.target.value.length > 0 && e.target.value.length < 8) {
                setError({ ...error, passwordError: <p style={{ color: 'red' }}>Password must have at least 8 characters</p> });
            } else { setError({ ...error, passwordError: <br /> }); }

        } else if (e.target.name === 'cfpassword') {
            if (e.target.value.length > 0 && e.target.value !== password) {
                setError({ ...error, cfPasswordError: <p style={{ color: 'red' }}>Passwords must match</p> });
            } else { setError({ ...error, cfPasswordError: <br /> }); }

        }
    }


    return (
        <form>
            <div>
                <label>Name: </label>
                <input value={name} name="name" type="text" onChange={handleDatos} />
            </div>
            {nameError}
            <div>
                <label>Lastname: </label>
                <input value={lastname} name="lastname" type="text" onChange={handleDatos} />
            </div>
            {lastNameError}
            <div>
                <label>Email Address: </label>
                <input value={email} name="email" type="text" onChange={handleDatos} />
            </div>
            {emailError}
            <div>
                <label>Password: </label>
                <input value={password} name="password" type="password" onChange={handleDatos} />
            </div>
            {passwordError}
            <div>
                <label>Confirm Password: </label>
                <input value={cfpassword} name="cfpassword" type="password" onChange={handleDatos} />
            </div>
            {cfPasswordError}
            <button type='button' onClick={limpiar}>Limpiar</button>
        </form>
    );
};

export default UserForm;
