import 'bootstrap/dist/css/bootstrap.min.css'
import '../template/custom.css'

import React, { Component } from 'react'

import Navbar from '../template/Navbar'
import Welcome from '../components/welcome'

export default class App extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <Welcome/>
            </div>
        )
    }
}
