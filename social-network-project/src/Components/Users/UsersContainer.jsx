import React from 'react';
import {connect} from 'react-redux';
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleisFollowingUnfollowing,
    getUsers, changeFollowStatus, changeUnfollowStatus
} from "../Redux/usersPageReducer";
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getUsersPageCurrentPage, getUsersPageIsFetching, getUsersPageIsFollowingUnfollowing,
    getUsersPagePageSize,
    getUsersPageTotalUsersCount,
    getUsersPageUsers
} from "../Redux/users-selectors";


class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : undefined}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   isFollowingUnfollowing={this.props.isFollowingUnfollowing}
                   toggleisFollowingUnfollowing={this.props.toggleisFollowingUnfollowing}
                   changeFollowStatus={this.props.changeFollowStatus}
                   changeUnfollowStatus={this.props.changeUnfollowStatus}
            />
        </>
            }

}

const mapStateToProps = (state) => {
    return {
        users: getUsersPageUsers(state),
        pageSize: getUsersPagePageSize(state),
        totalUsersCount: getUsersPageTotalUsersCount(state),
        currentPage: getUsersPageCurrentPage(state),
        isFetching: getUsersPageIsFetching(state),
        isFollowingUnfollowing: getUsersPageIsFollowingUnfollowing(state)
    }
}


const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleisFollowingUnfollowing,
        getUsers,
        changeFollowStatus,
        changeUnfollowStatus
    }
    )(UsersContainerAPI)

export default UsersContainer;