import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage,  getUsers} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { toggleFollowingProgress } from "../../redux/users-reducer";
import { withAuthRedirect } from "../../hoc/AuthRedirect";


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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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

export default withAuthRedirect (connect (mapStateToProps, 
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress, 
        //thunk - фунція, що створена в users-reducer for patching actions
        getUsers   
        },  
   
    ) (UsersContainer));