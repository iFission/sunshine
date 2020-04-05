import React from 'react'
import { Jumbotron } from './components/Jumbotron'
// import { Cards } from './components/Cards'
import { Newsletter } from './components/Newsletter'

export const Home = () => (
    <React.Fragment>
        <Jumbotron />
        {/* <Cards /> */}
        <Newsletter />
    </React.Fragment>
)