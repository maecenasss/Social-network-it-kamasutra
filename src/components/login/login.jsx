import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/Preloader/FormControl/FormControl";
import { required } from "../../utils/validator";

const LoginForm = (props) => {
    return (
                <form onSubmit={props.handleSubmit}>
                    <div>
                    <Field placeholder="Login" name="login" component={Input} validate={[required]} />
                    </div>
                    <div>
                    <Field placeholder="Password" name="password" component = {Input} validate={[required]} />
                    </div>
                    <div>
                    <Field type={'checkbox'} name='remember me' component = {Input}/> remember me
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
        console.log (formData)
    } 
    return <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>       
}

export default Login