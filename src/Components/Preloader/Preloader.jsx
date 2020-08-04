import React from 'react'
import './Preloader.css'

class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.viewRef = React.createRef();
    }

    render() {
        return (
            <div ref={this.viewRef} className="preloader">
                <svg width="200" height="200" viewBox="0 0 100 100">
                    <polyline class="line-cornered stroke-still" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-still" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-animation" points="0,0 100,0 100,100" stroke-width="10" fill="none"></polyline>
                    <polyline class="line-cornered stroke-animation" points="0,0 0,100 100,100" stroke-width="10" fill="none"></polyline>
                </svg>
            </div>
        );
    }

    componentWillUnmount() {
        this.viewRef.current.style.opacity = 0;
    }
}

export default Preloader;