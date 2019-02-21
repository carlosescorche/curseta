import React from 'react'
import PropTypes from 'prop-types'

function Container(props){
    let styles = {
        position: "relative",
        display:props.display,
        alignItems:props.alignItems,
        justifyContent:props.justify,
        flexWrap: 'wrap',
        width:"100%",
        maxWidth:"1200px",
        paddingLeft: 15,
        paddingRight:15,
        margin: '0 auto',
    }
    
    if (Object.entries(props.css).length > 0){
        styles = Object.assign(styles,props.css)
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

Container.defaultProps = {
    display: 'flex',
    alignItems:'center',
    justify:'center',
    css:{}
};

Container.propTypes = {
    display:PropTypes.string,
    alignItems:PropTypes.string,
    justify:PropTypes.string,
    css:PropTypes.object
}


function Row(props) {
    let styles = {
        position: "relative",
        width:'100%',
        display: props.display,
        alignItems: props.alignItems,
        justifyContent: props.justify,
        flexWrap: 'wrap',
        margin: '0 -15px',
    }

    if (Object.entries(props.css).length > 0) {
        styles = Object.assign(styles, props.css)
    }

    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

Row.defaultProps = {
    display: 'flex',
    alignItems: 'center',
    justify: 'flex-start',
    css: {}
};

Row.propTypes = {
    display: PropTypes.string,
    alignItems: PropTypes.string,
    justify: PropTypes.string,
    css: PropTypes.object
}


export{
    Container,
    Row
};