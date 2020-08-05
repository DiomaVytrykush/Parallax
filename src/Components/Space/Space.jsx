import React from 'react'
import './Space.css'
import Moon from './images/moon.svg'
import Jupiter from './images/Jupiter.svg'
import mars from './images/mars.svg'
import saturn from './images/saturn.svg'
import ship from './images/ship.svg'
import UFO from './images/UFO.svg'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const Space = () => {
    return (
        <>
        <ParallaxLayer offset={-1.6} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <h2 className="Space__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolorum cum saepe numquam maiores hic placeat ut tempora facere. Iure necessitatibus quaerat numquam culpa iusto dicta expedita nobis vel animi?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolorum cum saepe numquam maiores hic placeat ut tempora facere. Iure necessitatibus quaerat numquam culpa iusto dicta expedita nobis vel animi?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolorum cum saepe numquam maiores hic placeat ut tempora facere. Iure necessitatibus quaerat numquam culpa iusto dicta expedita nobis vel animi?
            </h2>
            </ParallaxLayer>

            <ParallaxLayer offset={-1.4} speed={-0.2} style={{ pointerEvents: 'none' }}>
                <img src={Moon} style={{ width: '15%', marginRight: '70%', opacity: 0.8, zIndex: 999 }} />
            </ParallaxLayer>

            <ParallaxLayer offset={-0.5} speed={-0.2} style={{ pointerEvents: 'none' }}>
                <img src={Jupiter} style={{ width: '15%', marginLeft: '80%', opacity: 0.8 }} />
            </ParallaxLayer>

            <ParallaxLayer offset={-1.5} speed={-0.2} style={{ pointerEvents: 'none' }}>
                <img src={mars} style={{ width: '15%', marginLeft: '80%', opacity: 0.8 }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ pointerEvents: 'none' }}>
                <img src={saturn} style={{ width: '15%', marginLeft: '15%', opacity: 0.8 }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.9} style={{ pointerEvents: 'none' }}>
                <img src={ship} style={{ width: '10%', marginLeft: '2%'}} />
            </ParallaxLayer>

            <ParallaxLayer offset={-2.4} speed={-0.4} style={{ pointerEvents: 'none' }}>
                <img src={UFO} style={{ width: '15%', marginLeft: '80%'}} />
            </ParallaxLayer>
        </>
    )
}

export default Space;