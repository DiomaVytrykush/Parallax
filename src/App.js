import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import ShipLandscape from './images/Ship-Landscape.svg'
import CloudsAndMoon from './Components/CloudsAndMoon/CloudsAndMoon'
import Stars from './images/Stars.svg'

class App extends React.Component {
  render() {
    return (
      <Parallax pages={4} ref={ref => (this.parallax = ref)} >

        <CloudsAndMoon />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{ backgroundImage: `url(${ShipLandscape})`, backgroundSize: 'cover', zIndex: -1 }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          onClick={() => this.parallax.scrollTo(1)}
        />

        <ParallaxLayer
          offset={1}
          speed={0}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        />

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => this.parallax.scrollTo(3)}
        />

        <ParallaxLayer
          offset={3}
          speed={-0.1}
          style={{ backgroundColor: 'rgb(26, 8, 24)', backgroundImage: `url(${Stars})`, backgroundSize: 'cover', zIndex: -1 }}
          onClick={() => this.parallax.scrollTo(0)}
        />

      </Parallax>
    )
  }
};

export default App;

