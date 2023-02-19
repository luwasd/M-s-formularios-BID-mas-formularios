import React, { useState } from 'react';
import ShowData from './components/ShowData';
import UserForm from './components/UserForm';


const App = () => {

    const initialValues = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        cfpassword: ''
    }

    const [datos, setDatos] = useState(initialValues);

    const limpiar = (e) => {
        setDatos(initialValues);
    }

    return (
        <>
            <h1>Formulario</h1>
            <UserForm
                datos={datos}
                setDatos={setDatos}
                limpiar={limpiar}
            />
            <br />
            <h2><em>Resultados</em></h2>
            <ShowData
                datos={datos}
                setDatos={setDatos}
            />
        </>
    );
}

export default App;