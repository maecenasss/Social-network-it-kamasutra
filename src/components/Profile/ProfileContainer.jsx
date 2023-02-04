import React from 'react';
import 'C:/ИТ/React/It-Kamasutra/react-way-of-samurai/src/App.css'
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
      componentDidMount () {
      let userId = this.props.router.params.userId;
      if (!userId) {
          userId = this.props.autorizedUserId;
          if (!userId) {
            this.props.history.push ('/login');
          }
      }
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
      }      
  render () {
  return <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}  />
  }
}

let AuthRedirectComponent = withAuthRedirect (ProfileContainer)

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  autorizedUserId: state.auth.userId,
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

export default compose (
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)

