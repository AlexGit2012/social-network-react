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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingUnfollowing: state.usersPage.isFollowingUnfollowing
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

export default compose(withAuthRedirect)(UsersContainer);