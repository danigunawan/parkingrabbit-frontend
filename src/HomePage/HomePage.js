import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './Footer'
import Header from './Header'
import Process from './Process'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import mapMarkerIcon from './images/map-marker-alt-solid.svg'


class HomePage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className='homepage'>
        <div className='homepage__container'>
          <Navbar className='homepage__navbar' />

          <Header className='homepage__header'/>

          <Process className='homepage__process' />

          {/* <Footer className='homepage__footer' /> */}
        </div>
      </div>
    )
  }
}

export default HomePage