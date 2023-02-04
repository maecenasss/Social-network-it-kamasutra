import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, requestUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { toggleFollowingProgress } from "../../redux/users-reducer";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";


//create class Users і компоненту для запитів на сервер
class UsersContainer extends React.Component {
    
    //componentDidMount use for get request to server
    componentDidMount () {
    //thunk function - фунція, що створена в users-reducer for patching actions 
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    //create method to change pages with onClick
    onPageChanged = (pageNumber) => {
//thunk function - фунція, що створена в users-reducer for patching actions
       this.props.getUsers (pageNumber, this.props.pageSize)
    }

//create method render what return jsx 
render () {
    //закидаємо пропси в презентаційну компоненту юзерс 
    return <>
    {this.props.isFetching ? <Preloader/> : null}
    <Users totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                onPageChanged = {this.onPageChanged}
                users = {this.props.users}
                follow = {this.props.follow}
                unfollow = {this.props.unfollow}
                followingInProgress = {this.props.followingInProgress}
                />
    </>  
}  
}
//функція що отримує повний state
let mapStateToProps = (state) => {
    return {
        //create users pages
        users: getUsers (state),
        pageSize: getPageSize (state),
        totalUsersCount: getTotalUsersCount (state),
        currentPage: getCurrentPage (state),
        isFetching: getIsFetching (state),
        followingInProgress: getFollowingInProgress (state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (usersId) => {
//             dispatch (followActionCreator(usersId))
//         },
//         unfollow: (usersId) => {
//             dispatch(unfollowActionCreator(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageActionCreator (pageNumber))
//         }, 
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator (totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingActionCreator (isFetching))
//         },  
//     }
// }A
//function compose to connect different HOC
export default compose (
    // withAuthRedirect,
    connect (mapStateToProps, {follow,unfollow,setCurrentPage,toggleFollowingProgress, //thunk - фунція, що створена в users-reducer for patching actions
            getUsers: requestUsers
            },  
        )    
)(UsersContainer)
