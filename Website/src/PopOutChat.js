import React, { Component } from 'react'
import PopoutWindow from 'react-popout'


export default class PopoutChat extends Component {

    render() {
        return (
            <React.Fragment>
                <PopoutWindow url='http://localhost:300' title='Window title' onClosing={this.popupClosed}>
                </PopoutWindow>
            </React.Fragment>
        )
    }
}


