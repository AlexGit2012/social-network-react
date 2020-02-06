export const getIsAuthValue = state => {
    return state.authPage.isAuth
}

export const getDialogsPageValue = state => {
    return state.dialogsPage
}

export const getLoginStatus = state => {
    return state.authPage.login;
}


export const getPosts = state => {
    return state.profilePage.posts;
}

export const getPostAva = state => {
    return state.profilePage.postAva;
}

export const getTitleMyPosts = state => {
    return state.profilePage.titleMyPosts;
}

export const getNewPostText = state => {
    return state.profilePage.newPostText;
}

export const getProfilePage = state => {
    return state.profilePage;
}

export const getProfile = state => {
    return state.profilePage.profile;
}

export const getProfilePageStatus = state => {
    return state.profilePage.status;
}

export const getAuthPageUserID = state => {
    return state.authPage.userID;
}

export const getUsersPageUsers = state => {
    return state.usersPage.users;
}

export const getUsersPagePageSize = state => {
    return state.usersPage.pageSize;
}

export const getUsersPageTotalUsersCount = state => {
    return state.usersPage.totalUsersCount;
}

export const getUsersPageCurrentPage = state => {
    return state.usersPage.currentPage;
}

export const getUsersPageIsFetching = state => {
    return state.usersPage.isFetching;
}

export const getUsersPageIsFollowingUnfollowing = state => {
    return state.usersPage.isFollowingUnfollowing;
}

