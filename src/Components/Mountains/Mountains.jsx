import React from 'react'
import Flowers from './images/Flowers.svg'
import papillon from './images/papillon.svg'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

const Mountains = () => {
    return (
        <>

            <ParallaxLayer offset={-0.5} speed={-0.1} style={{ pointerEvents: 'none' }}>
                <img src={Flowers} style={{ width: '15%',  marginLeft: '80%'}} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.9} speed={0.3} style={{ pointerEvents: 'none' }}>
                <img src={papillon} style={{ width: '10%', marginLeft: '30%' }} />
            </ParallaxLayer>

        </>
    )
}

export default Mountains;