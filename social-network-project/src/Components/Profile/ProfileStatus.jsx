import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState(
            {status: e.currentTarget.value}
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status || "------"}</span>
                    </div>
                    : <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode.bind(this)}
                               value={this.state.status}
                               onChange={this.onStatusChange}
                        >
                        </input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;