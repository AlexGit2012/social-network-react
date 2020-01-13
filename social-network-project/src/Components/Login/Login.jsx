import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Element} from "../Common/FormControls";
import {requiredField} from "../../utils/validators/validator";

const Input = Element("input")

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
            <Field component={Input}
                   name={"Login"}
                   placeholder={"Login"}
                   type={"text"}
                   validate={[requiredField]}
            />
        </div>
        <div>
            <Field component={Input}
                   name={"password"}
                   placeholder={"password"}
                   validate={[requiredField]}
                   type={"text"}/>
        </div>
        <div>
            <Field component={"input"}
                   name={"rememberMe"}
                   type={"checkbox"}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;