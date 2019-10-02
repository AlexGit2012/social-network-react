import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToRedirectProps = (state) => {
    return {
        isAuth:state.authPage.isAuth
    }
}

export const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
       render () {
           if (!this.props.isAuth) {return <Redirect to='/login'/>}
           return <Component {...this.props}/>
       }
   }
   return connect(mapStateToRedirectProps)(RedirectComponent)
}