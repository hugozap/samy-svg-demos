import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactSVG from 'react-svg'
import Magome from './Magome.svg'
import Robot from './robot';
import Reading from './reading';
import SamyEx1 from './SamyEx1';

class App extends Component {
  constructor (props) {
    super(props)
    
  }

  

  render () {
    return (
        <div>
          <Reading/>
        </div>
    )
  }
}

export default App
