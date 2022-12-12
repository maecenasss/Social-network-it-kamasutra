import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { getUsers, usersAPI } from "../Api/api";

//create class Users і компоненту для запитів на сервер
class UsersContainer extends React.Component {
    
    //componentDidMount use for get request to server
    componentDidMount () {
    //перед відрисовкою утворюємо юзерів, переносимо state із user-reducer 
    //take request to server to get users state & after get state - setUsers
    this.props.toggleIsFetching (true)    
    
    usersAPI.getUsers (this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching (false); 
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount=100)
        });
    }
    //create method to change pages with onClick
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers (pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching (false) 
            this.props.setUsers(data.items)
            
        });
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
        isFetching: state.usersPage.isFetching
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

export default connect (mapStateToProps, 
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching
        },  
   
    ) (UsersContainer);