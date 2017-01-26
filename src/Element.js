import React from 'react'

export default class Element extends React.Component {
  static propTypes = {
    select: React.PropTypes.string.isRequired,
    svg: React.PropTypes.object
  }

  constructor (props) {
    super(props)
    this.state = {
      elemRefs: null
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log('proxy receiving props')
    if (nextProps.svg && !this.state.elemRefs) {
      this.setState({elemRefs: nextProps.svg.querySelectorAll(this.props.select)})
    }

    if (this.state.elemRefs) {
      const pnames = Object.keys(nextProps)
      for (var i = 0; i < pnames.length; i++) {
        const propName = pnames[i]
        this.state.elemRefs.forEach((elem) => { elem.setAttribute(propName, nextProps[propName]) })
      }
    }

    /* The proxy received properties, apply them to the svg element */
  }

  render () {
    return null
  }
}
