import React from 'react'
import PropTypes from 'prop-types'

const Video = props => {
    var videoSrc = "https://www.youtube.com/embed/" +
        props.video + "?autoplay=" +
        props.autoplay + "&rel=" +
        props.rel + "&modestbranding=" +
        props.modest;
        
    return (
        <div className="container">
            <iframe className="player" type="text/html" width="100%" height="100%" src={videoSrc} frameborder="0" />
        </div>
    )
    
}

Video.defaultProps = {
    autoplay : '0',
    rel : '0',
    modest : '1'
}

Video.propTypes = {
    video : PropTypes.string.isRequired,
    autoplay: PropTypes.string.isRequired,
    rel : PropTypes.string.isRequired,
    modest : PropTypes.string.isRequired
}

export default Video
