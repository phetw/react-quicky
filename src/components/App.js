import { h, Component } from 'preact'
import PlaneBig from '../images/plane_big.jpg'
import PlaneSmall from '../images/plane_small.jpg'

export default class App extends Component {
  render() {
    return (
      <main>
        Hello world
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio tempora odio voluptatum numquam, blanditiis dignissimos, ad harum cum magnam
          nulla nostrum aspernatur accusantium quaerat? Totam maxime nulla harum esse!
        </p>
        <picture>
          <source media="(max-width: 425px)" srcset={PlaneSmall} />
          <source media="(min-width: 426px)" srcset={PlaneBig} />
          <img src={PlaneSmall} alt="Plane" />
        </picture>
        <img
          src={PlaneSmall}
          srcSet={`${PlaneSmall} 200w, ${PlaneBig} 767w`}
          sizes="(max-width: 425px) 200px,
            (min-width: 426px) 767px"
          alt="Plane"
        />
      </main>
    )
  }
}
