import React from 'react'
import './Footer.css'
import cave from './images/cave.svg'
import oct from './images/oct.svg'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const Footer = () => {
    return (
        <>

            <ParallaxLayer offset={-2.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img alt="img" className="oct" src={oct} style={{ width: '15%', position: 'absolute', bottom: '70%', left: '36%', zIndex: -1 }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.1} speed={0.2} style={{ pointerEvents: 'none' }}>
                <img alt="img" className="cave" src={cave} style={{ width: '70%', transform: 'rotate(180deg)', position: 'absolute', bottom: '1%', left: '-4%' }} />
            </ParallaxLayer>

        </>
    )
}

export default Footer;