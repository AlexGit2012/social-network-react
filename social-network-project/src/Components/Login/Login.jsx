import React from 'react';
import {Field, reduxForm} from "redux-form";

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)

    }

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"input"} name={"Login"} placeholder={"Login"} type={"text"}/>
        </div>
        <div>
            <Field component={"input"} name={"password"} placeholder={"password"} type={"text"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;