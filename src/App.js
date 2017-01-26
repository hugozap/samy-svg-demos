import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ReactSVG from 'react-svg'
import Magome from './Magome.svg'
import Robot from './robot';
import SamyEx1 from './SamyEx1';

class App extends Component {
  constructor (props) {
    super(props)
    
  }

  

  render () {
    return (
        <div>
          <Robot/>
        </div>
    )
  }
}

export default App
