import React, {useState} from "react"; //useState par aalmacenar los valores del usuario
import { Navigate } from "react-router-dom"; //redireccionar al usuario
import { connect } from 'react-redux'; //asistente de conexion
import { login } from '../actions/auth.js'

const Login = ({login, isAuthenticated}) =>{
    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    }) //establecemos los datos del formulario 

    const onSubmit = e => {
        e.preventDefault()

        login(email,password)
    };

    if (isAuthenticated) {
        return <Navigate to='/' />
    }

    return(
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(null, {login})(Login);