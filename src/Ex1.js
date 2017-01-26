import React from 'react'
import Sammy, {Element} from './Sammy'
import Magome from './Magome.svg'

export default class Ex1 extends React.Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)
    this.state = {
      angle: 0
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({angle: this.state.angle + 1})
    }, 100)
  }

  render () {
    const transform = `rotate(${this.state.angle}, 247, 240)`
    return (
      <Sammy path={Magome}>
        {
          (svg) => (
              <Element svg={svg} select='#Molino' transform={transform} />
          )
        }
      </Sammy>
    )
  }
}
