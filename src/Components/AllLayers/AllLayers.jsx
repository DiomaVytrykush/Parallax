import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Background from '../../Components/Background/Background'
import Stars from './images/Stars.svg'
import Header from '../../Components/Header/Header'
import Space from '../Space/Space'
import MountainsBG from './images/MountainsBG.svg'
import Mountains from '../Mountains/Mountains'
import Footer from '../Footer/Footer'

class AllLayers extends React.Component {
    render() {
        return (

            <Parallax pages={7} ref={ref => (this.parallax = ref)} >

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
                    onClick={() => this.parallax.scrollTo(3)}
                />

                <ParallaxLayer
                    offset={3}
                    speed={-0.1}
                    onClick={() => this.parallax.scrollTo(4)}
                >
                    <Space />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={3.8}
                    factor={2}
                    speed={-0.2}
                    style={{ backgroundColor: 'rgb(26, 8, 24)', backgroundImage: `url(${MountainsBG})`, backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -2 }}
                    onClick={() => this.parallax.scrollTo(5)}
                />

                <ParallaxLayer
                    offset={5}
                    speed={-0.2}
                    onClick={() => this.parallax.scrollTo(6)}>
                    <Mountains />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={6.2}
                    speed={-0.2}
                    style={{ backgroundColor: 'rgb(19, 5, 28)', zIndex: -2 }}
                    onClick={() => this.parallax.scrollTo(0)}>
                    <Footer />
                </ParallaxLayer>

            </Parallax>
        )
    }
};

export default AllLayers;