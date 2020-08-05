import React from 'react'
import cave from './images/cave.svg'
import oct from './images/oct.svg'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const Footer = () => {
    return (
        <>

            <ParallaxLayer offset={-2.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={oct} style={{ width: '15%', marginLeft: '40%', zIndex : -1}} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.1} speed={0.2} style={{ pointerEvents: 'none' }}>
                <img src={cave} style={{ width: '70%', marginLeft: '-3%', transform : 'rotate(180deg)'}} />
            </ParallaxLayer>

        </>
    )
}

export default Footer;