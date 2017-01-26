import React from 'react'
import ReactSVG from 'react-svg'
import Element from './Element'
import SVGLoader from './SVGLoader';

class Sammy extends React.Component {
  static propTypes = {
      path: React.PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      svg: null
    }
    this._svgSet = false
  }
  onSVGReady (svgNode) {
    console.log('SVG loaded', svgNode)
    this.setState({svg: svgNode})
  }

  render () {
    const renderChildrenCallback = this.props.children(this.state.svg)
    return (
      <div>
        <SVGLoader path={this.props.path} onSVGReady={this.onSVGReady.bind(this)}/>
        {renderChildrenCallback}
      </div>
    )
  }
}
export {Element}
export default Sammy

