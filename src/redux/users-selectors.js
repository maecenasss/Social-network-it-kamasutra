import { createSelector } from "reselect";

const getUsersSimpleSelector = (state) => {
    return state.usersPage.users; 
}
//selector from reselect. Селектро із бібліотеки реселект приймає декілька селектрорів і склідкує за змінами в стейті. Включається лише коли відбуваються зміни 
export const getUsers = createSelector ( getUsersSimpleSelector, 
    (users) => {
    return users
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize; 
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount; 
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage; 
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching; 
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}



