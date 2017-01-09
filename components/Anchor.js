import React from 'react'
import Router from 'next/router'
import jump from 'jump.js'
import throttle from 'lodash.throttle'

export default class Anchor extends React.Component {
  constructor (props) {
    super(props)
    this.handleHashChange = throttle(this.handleHashChange.bind(this), 1000, {
      trailing: true
    })
  }

  componentDidMount () {
    Router.router.addListener('routeChangeComplete', this.handleHashChange)
    this.handleHashChange(window.location.hash)
  }

  componentWillUnmount () {
    Router.router.removeListener('routeChangeComplete', this.handleHashChange)
  }

  handleHashChange (url) {
    if (!url) return
    const i = url.indexOf('#')
    if (i === -1) return
    const id = url.slice(i + 1)
    if (id === this.props.id) this.scroll()
  }

  scroll () {
    jump(this.el, {
      offset: -106,
      duration: 500
    })
  }

  render () {
    return (
      <div {...this.props} ref={(el) => { this.el = el }}>
        { this.props.children }
      </div>
    )
  }
}

Anchor.propTypes = {
  id: React.PropTypes.string
}
