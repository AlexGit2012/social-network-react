export const FOLLOW = 'MP/FOLLOW_FRIEND';
export const UNFOLLOW = 'MP/UNFOLLOW_FRIEND';
export const SET_USERS = 'MP/SET_USERS';
export const SET_CURRENT_PAGE = 'MP/SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'MP/SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'MP/TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_UNFOLLOWING = 'MP/TOGGLE_IS_FOLLOWING_UNFOLLOWING';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching:true,
    isFollowingUnfollowing:[]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount:action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_UNFOLLOWING:
            return {
                ...state,
                isFollowingUnfollowing: action.isFetching
                    ? [...state.isFollowingUnfollowing,action.userId]
                    : state.isFollowingUnfollowing.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userID) => ({type: FOLLOW, userID});
export const unfollow = (userID) => ({type: UNFOLLOW, userID});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleisFollowingUnfollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_UNFOLLOWING, isFetching,userId})

export default usersReducer;