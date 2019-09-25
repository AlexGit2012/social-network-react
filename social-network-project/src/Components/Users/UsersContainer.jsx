import React from 'react';
import {connect} from 'react-redux';
import Users from "./Users";
import {
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleisFollowingUnfollowing
} from "../Redux/usersPageReducer";
import Preloader from "../Common/Preloader";
import {userAPI} from "../../API/Api";


class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        userAPI.getUsers(pageNumber,this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });
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
        follow, unfollow,
        setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching,
        toggleisFollowingUnfollowing
    }
    )(UsersContainerAPI)

export default UsersContainer;