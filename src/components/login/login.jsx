import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/Preloader/FormControl/FormControl";
import { required } from "../../utils/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
                    </div>
                    <div>
                    <Field placeholder={"Password"} name={"password"} type = {'password'} component = {Input} validate={[required]} />
                    </div>
                    <div>
                    <Field type={'checkbox'} name={'rememberMe'} component = {Input}/> remember me
                    </div>
                    <div>
                    <button>Login</button>
                    </div>
                </form>
            )
        
}

const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login (formData.email, formData.password, formData.rememberMe)
    } 
    return <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>       
}

export default connect (null, {login}) (Login)