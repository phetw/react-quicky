import React, { Component } from 'react'

import PlaneBig from '../assets/plane_big.jpg'
import PlaneSmall from '../assets/plane_small.jpg'
import PlaneBlur from '../assets/plane_blur.jpg'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    console.log(window)
    if (!('IntersectionObserver' in window)) {
      this.setState(
        {
          isVisible: true,
        })
    } else {
      const images = document.querySelectorAll('.lazy')
      const options = {
        threshold: 0.5,
      }
  
      this.observer = new IntersectionObserver(this.onIntersect.bind(this), options)
      images.forEach(image => {
        this.observer.observe(image)
      })
    }
 
  }

  onIntersect(entries) {
    entries.forEach(entry => {
      // Are we in viewport?
      if (entry.intersectionRatio > 0) {
        this.setState(
          {
            isVisible: true,
          },
          () => {
            this.observer.unobserve(entry.target)
          }
        )
      }
    })
  }

  render() {
    return (
      <main id="main" style={{ maxWidth: '800px', margin: '0 auto' }}>
        Hello world
        <p style={{ marginBottom: '50rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio tempora odio voluptatum numquam, blanditiis dignissimos, ad harum cum magnam
          nulla nostrum aspernatur accusantium quaerat? Totam maxime nulla harum esse! ...
        </p>
        {this.state.isVisible ? (
          <picture>
            <source media="(max-width: 425px)" srcSet={PlaneSmall} />
            <source media="(min-width: 426px)" srcSet={PlaneBig} />
            <img  src={PlaneSmall} alt="Plane" style={{ minWidth: '400px', maxWidth: '100%' }} />
          </picture>
        ) : (
          <img className="lazy" src={PlaneBlur} alt="Plane" style={{ minWidth: '400px', maxWidth: '100%' }} />
        )}
      </main>
    )
  }
}
