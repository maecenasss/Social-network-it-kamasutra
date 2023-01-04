import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

let mapStateToPropsforRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component) => {
    class NavigateComponent extends React.Component {
        render () {
            if (!this.props.isAuth) return <Navigate to = {'/login'}/>
            return <Component {...this.props}/>
        }
    }

let ConnectAuthRedirectComponent = connect (mapStateToPropsforRedirect)(NavigateComponent);

return ConnectAuthRedirectComponent;
}