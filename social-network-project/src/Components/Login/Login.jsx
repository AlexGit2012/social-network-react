import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Element} from "../Common/FormControls";
import {requiredField} from "../../utils/validators/validator";
import {login} from "../Redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import style from "../Common/FormControls.module.css";
import {getIsAuthValue} from "../Redux/users-selectors"

const Input = Element("input")

const Login = (props) => {

    const onSubmit = (formData) => {
        let {email, password, rememberMe = false} = formData
        props.login(email, password, rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    } else

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

}

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input}
                   name={"email"}
                   placeholder={"Email"}
                   type={"text"}
                   validate={[requiredField]}
            />
        </div>
        <div>
            <Field component={Input}
                   name={"password"}
                   placeholder={"password"}
                   validate={[requiredField]}
                   type={"password"}/>
        </div>
        <div>
            <Field component={"input"}
                   name={"rememberMe"}
                   type={"checkbox"}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => ({
    isAuth: getIsAuthValue(state)
})

export default connect(mapStateToProps, {login})(Login);