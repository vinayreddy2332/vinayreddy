import React, { Component } from 'react'
import './css/Page6.css'

export default class Page6 extends Component {
  render() {
    return (
      <>
          <div id='header'>
               <div className='logo'>
                    My Project Logo
               </div>
          </div>
          <div id='section'>
                    <div className='card'>
                         <img src='public/images/v1.jpg'></img>
                         <label>VK&ABD</label>
                    </div>
                    <div className='card'>
                         <img src='public/images/v2.jpg'></img>
                         <label>LAMBO</label>
                    </div>
                    <div className='card'>
                         <img src='public/images/v3.jpg'></img>
                         <label>SC</label>
                    </div>

          </div>
          <div id='footer'>Copyright @ 2025. All rights reserved.</div>

      </>
    )
  }
}