import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/Preloader/FormControl/FormControl";
import { required } from "../../utils/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate} from "react-router-dom";
import style from '../Common/Preloader/FormControl/FormControle.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return (
                <form onSubmit={handleSubmit}>
                    <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
                    </div>
                    <div>
                    <Field placeholder={"Password"} name={"password"} type = {'password'} component = {Input} validate={[required]} />
                    </div>
                    <div>
                    <Field type={'checkbox'} name={'rememberMe'} component = {Input}/> remember me
                    </div>
                    {error && <div className={style.formSummaryError}>
                        {error}
                    </div>}
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
    if (props.isAuth) {
    return    <Navigate to = {'/profile'}/>
    }
    return <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>       
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login}) (Login)