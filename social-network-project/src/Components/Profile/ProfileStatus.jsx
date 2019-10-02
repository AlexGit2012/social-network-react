import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () =>{

        this.setState({
            editMode: true
        })
        console.log(this)
        debugger
    }

    deactivateEditMode = () =>{
        this.setState({
            editMode: false
        })
        console.log(this)
        debugger
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)}
                               value={this.props.status}></input>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus;