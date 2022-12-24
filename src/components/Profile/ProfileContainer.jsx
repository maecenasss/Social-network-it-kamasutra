import React from 'react';
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';


class ProfileContainer extends React.Component  {
      componentDidMount () {
      let userId = this.props.router.params.userId;
      if (!userId) {
        userId = 2;
      }
      this.props.getUserProfile(userId);
      }      
  render () {
  return <Profile {...this.props} profile = {this.props.profile} />
  }
}

let AuthRedirectComponent = withAuthRedirect (ProfileContainer)

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

//створюємо перемінну для отримання даних із URL за допомогою функції withRouter
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { getUserProfile })(
	withRouter(AuthRedirectComponent));