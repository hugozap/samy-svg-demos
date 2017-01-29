import React from 'react'
import {Samy, Proxy} from 'react-samy-svg'
import reading from './reading_man.svg'
import {Motion, spring} from 'react-motion'

// NOTE: the svg cannot be distributed
export default class Reading extends React.Component {
  static propTypes = {

  }

  constructor (props) {
    super(props)
    this.state = {
      leftEyeOpened: true,
      rightEyeOpened: true,
      legAngle: 0,
      handleAngle: 0,
      legAngle: 0,
      catHeadAngle: 0
    }
  }

  componentDidMount (props) {
    this.animateEyes()
    this.animateHandle()
    this.animateLeg()
    this.animateCatHead()
  }

  animateLeg () {
    const changeAngle = (state) => {
      return { legAngle: state.legAngle === 5 ? -5 : 5 }
    }
    setInterval(() => {
      this.setState(changeAngle)
    }, 2500)
  }

  animateCatHead () {
    const changeAngle = (state) => {
      return { catHeadAngle: state.catHeadAngle === 5 ? -5 : 5 }
    }
    setInterval(() => {
      this.setState(changeAngle)
    }, 3500)
  }

  animateHandle () {
    const changeAngle = (state) => {
      return { handleAngle: state.handleAngle === 1 ? -1 : 1 }
    }
    setInterval(() => {
      this.setState(changeAngle)
    }, 800)
  }
  animateEyes () {
    const animateLeftEye = (state, props) => {
      return {leftEyeOpened: !state.leftEyeOpened}
    }
    const animateRightEye = (state, props) => {
      return {rightEyeOpened: !state.rightEyeOpened}
    }

    setInterval(() => {
     // Open
      this.setState(animateLeftEye)
      this.setState(animateRightEye)
      setTimeout(() => {
        // Close
        this.setState(animateLeftEye)
        this.setState(animateRightEye)
      }, 300)
    }, 3000)
  }

  clickHandle (ev) {
      console.log('hey')
  }

  render () {
    const s = this.state
    // TODO: create utils for transforms/scale/rotate
    const leye = `scale(1,${s.leftEyeOpened ? 1 : 0.2})`
    const reye = `scale(1,${s.rightEyeOpened ? 1 : 0.2})`
    const catHead = (svg) => {
      return (
        <Motion defaultStyle={{a: 0}} style={{a: spring(s.catHeadAngle)}}>
          {
                (val) => {
                  const transform = `rotate(${val.a}, 15, 15)`
                  return <Proxy svg={svg} select='#cathead' transform={transform} />
                }
            }
        </Motion>

      )
    }

    const handle = (svg) => {
      return (
        <Motion defaultStyle={{a: 0}} style={{a: spring(s.handleAngle)}}>
          {
                (val) => {
                  const transform = `rotate(${val.a}, 10, 0)`
                  return <Proxy svg={svg} onclick={this.clickHandle} select='#handle' transform={transform} />
                }
            }
        </Motion>

      )
    }
    const leg = (svg) => {
      return (
        <Motion defaultStyle={{a: 0}} style={{a: spring(s.legAngle)}}>
          {
                (val) => {
                  const transform = `rotate(${val.a}, 10, 0)`
                  return <Proxy svg={svg} select='#leg' transform={transform} />
                }
            }
        </Motion>

      )
    }

    return (
      <Samy path={reading} style={{width: '100%', height: '100vh'}}>
        { (svg) => [
          <Proxy svg={svg} select='#lefteye' transform={leye} />,
          <Proxy svg={svg} select='#righteye' transform={reye} />,
          handle(svg),
          leg(svg),
          catHead(svg)
        ]

        }
      </Samy>
    )
  }
}
