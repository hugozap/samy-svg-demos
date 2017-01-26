import React from 'react';
import {Samy,Proxy} from 'react-samy-svg'
import Magome from './Magome.svg'

export default class SamyEx1 extends React.Component {
  static propTypes = {
    
  }

  constructor(props) {
    super(props)
  }

  render() {
    
    return (
      <Samy path={Magome}>
        { (svg) => [
            <Proxy svg={svg} select="#Molino" fill="blue" stroke-width="4"/>
        ]
           
        }
         </Samy>
    );
  }
}
