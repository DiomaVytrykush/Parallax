import React from 'react'
import { ParallaxLayer } from 'react-spring/renderprops-addons'
import eclipse from './images/eclipse.svg'
import Moon from './images/moon.svg'

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const CloudsAndMoon = () => {
    return (
        <div>

            <ParallaxLayer offset={0.1} speed={-0.6} style={{ pointerEvents: 'none' }}>
                <img src={eclipse} style={{ width: '15%', marginLeft: '70%', opacity: 0.8 }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.7} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.2} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={3.1} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={Moon} style={{ width: '15%', marginRight: '70%', opacity: 0.8 }} />
            </ParallaxLayer>

        </div>
    )
}

export default CloudsAndMoon;


