import React, { Component } from 'react'
import'./css/Page5.css'
export default class
 extends Component {
  constructor() {
    super();
    this.state = {index: 0, slideCount: 3};
    this.autoSlide = this.autoSlide.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }
  autoSlide(){
    let nextIndex = (this.state.index + 1)  % this.state.slideCount;
    this.setState({index: nextIndex});
    document.getElementById("slideRef").style.transform = `translateX(-${nextIndex * 100}%)`;
  }
  render() {
    const{index}=this.state;
    return (
      <div>
        <header>
            <div className='logo'>Sliding Page-Slide{index}</div>
            <section>
                <div className='slider'>
                <div className='slides'id="slideRef">
                <div className='slide s1'></div>
                <div className='slide s2'></div>
                <div className='slide s3'></div>
                </div>
                </div>
                <footer>
                    Copyright @ 2025.All rights reserved
                </footer>
            </section>
        </header>
      </div>
    )
  }
}
