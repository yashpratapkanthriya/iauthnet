import React, {Component} from 'react'

class userAuth extends  Component{

    constructor(props){
        super(props)

         this.state ={
            loggedIn : false
        }
        updateState = updateState.bind(this)
    }


}

function  updateState(loggedIn){
    this.setState({loggedIn})
}

export default userAuth