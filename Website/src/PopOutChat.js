import React, { Component } from 'react'
import { Col, Card } from 'react-bootstrap'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PostForm from './components/PostForm'
import { LiveChatHeader } from './components/LiveChatHeader'
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


