import React from 'react'
import ReactSVG from 'react-svg'

/* SVGProxy uses svg react to dynamically load a component. Its childs
 * can reference an internal node and set attributes, that are proxied to the svg element
 */
export default class SVGProxy extends React.Component {
  static propTypes = {
    path: React.PropTypes.string.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  onSVGReady (svgElem) {
    this.setState({svg: svgElem})
  }

  componentDidMount () {
  }
  render () {
    const selectorsWithSVGRef = this.state.svg == null ? '' : React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        svg: this.state.svg
      })
    })

    return (
      <div>
        <ReactSVG path={this.props.path} callback={this.onSVGReady.bind(this)} />
        {selectorsWithSVGRef}
      </div>
    )
  }
}

export class Selector extends React.Component {
  static propTypes = {
    svg: React.PropTypes.object
  }

  applyProps () {
    const svg = this.props.svg
    if (!svg) {
      return
    }

    var elems = Array.prototype.slice.call(svg.querySelectorAll(this.props.path))
          // TODO: Only apply valid properties
    const propNames = Object.keys(this.props)
    propNames.forEach((p) => {
      if(p=='svg') return;

      elems.forEach((el) => {
        el.setAttribute(p, this.props[propNames])
      })
    })
  }

   // TODO: Esto no se dispara la primera vez, revisar bien que se actualicen las propiedades la primera vez
  componentWillReceiveProps (nextProps) {
    // This method gets called after when props change (after 1st time)
   // this.applyProps()
  }

  constructor (props) {
    super(props)
    this.applyProps = this.applyProps.bind(this)
  }

  render () {
      return null;
  }
}
