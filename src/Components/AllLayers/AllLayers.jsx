import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Background from '../../Components/Background/Background'
import Stars from './images/Stars.svg'
import Header from '../../Components/Header/Header'

class AllLayers extends React.Component {
    render() {
        return (

            <Parallax pages={3} ref={ref => (this.parallax = ref)} >

                <Background />

                <ParallaxLayer
                    offset={0.2}
                    speed={-0.2}
                    onClick={() => this.parallax.scrollTo(1)}>
                    <Header />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={-0}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => this.parallax.scrollTo(2)}
                />

                <ParallaxLayer
                    offset={2}
                    factor={2}
                    speed={-0.1}
                    style={{ backgroundColor: 'rgb(26, 8, 24)', backgroundImage: `url(${Stars})`, backgroundSize: 'cover', zIndex: -1 }}
                    onClick={() => this.parallax.scrollTo(0)}
                />

            </Parallax>
        )
    }
};

export default AllLayers;