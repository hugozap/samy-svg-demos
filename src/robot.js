import React from 'react'
import {Samy, Proxy} from 'react-samy-svg'
import robot from './robot.svg'

export default class Robot extends React.Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)
    this.state = {
      coreOffsetY: 0,
      coreYDirection: 0,
      wheelRotation: 0,
      rightArmDirection: 0,
      rightArmRotation: 0,
      wheel: [0, 0],
      shoulderr: [0, 0],
      shoulderl: [0, 0]
    }
  }

  componentDidMount (props) {
    this.setState(this.setRotationPoints)
    this.animate()
  }
  setRotationPoints (state, props) {
    return {...state, wheel: [40, 40], shoulderr: [10, 100], shoulderl: [75, 20] }
  }

  animateWheel (state) {
    return {wheelRotation: state.wheelRotation + 5 }
  }

  animateRightArm (s) {
    const delta = 1
    return {rightArmRotation: s.rightArmDirection === 0 ? s.rightArmRotation + delta : s.rightArmRotation - delta }
  }
  checkRightArm (s) {
    if (s.rightArmDirection == 0 && s.rightArmRotation > 50) {
      return {rightArmDirection: 1}
    } else if (s.rightArmDirection == 1 && s.rightArmRotation < 15) {
      return {rightArmDirection: 0 }
    }
  }

  moveCore (s) {
    const delta = 0.5
    return {coreOffsetY: s.coreYDirection === 0 ? s.coreOffsetY + delta : s.coreOffsetY - delta }
  }

  checkCore (s) {
    if (s.coreYDirection == 0 && s.coreOffsetY > 5) {
      return {coreOffsetY: 1}
    } else if (s.coreYDirection == 1 && s.coreOffsetY < 5) {
      return {coreOffsetY: 0 }
    }
  }

  animate () {
    setInterval(() => {
      this.setState(this.animateWheel)
      this.setState(this.animateRightArm)
      this.setState(this.checkRightArm)
      this.setState(this.moveCore)
      this.setState(this.checkCore)
    }, 20)
  }

  render () {
    const s = this.state
    const wheelTransform = `rotate(${s.wheelRotation}, ${s.wheel[0]}, ${s.wheel[1]})`
    const rightArmTransform = `rotate(${s.rightArmRotation}, ${s.shoulderr[0]}, ${s.shoulderr[1]})`
    const headTransform = `translate(0, ${s.coreOffsetY / 2})`
    const bodyTransform = `translate(0, ${s.coreOffsetY})`
    return (
      <Samy path={robot} style={{width:'100%', height:'100vh'}}>
        { (svg) => [
          <Proxy svg={svg} select='#rueda' transform={wheelTransform} />,
          <Proxy svg={svg} select='#rightarm' transform={rightArmTransform} />,
          <Proxy svg={svg} select='#body' transform={bodyTransform} />,
          <Proxy svg={svg} select='#head' transform={headTransform} />

        ]

        }
      </Samy>
    )
  }
}
