import React from 'react'
import {PropTypes} from 'prop-types'

//Componentes Material UI
import Grid from '@material-ui/core/Grid'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Banner = (props) => {
    const { classes } = props

    return( 
        <Grid container className={classes.root} alignItems="flex-end" justify="center">
            <Grid container alignItems="flex-end" justify="center" className={classes.wrapperImages}>
                <img src="static/iconos/figura.svg" className={classes.imgLeft} alt="banner"></img>
                <img src="static/iconos/figura.svg" className={classes.imgRight} alt="banner"></img>
            </Grid>

            <Grid container alignItems="center" justify="center" direction="column" className={classes.wrapperContent}>
                <Grid item xs={12} sm={8} md={4} style={{ textAlign: 'center', flexBasis:0}}>
                    <Typography variant="h4" component="h1" style={{ marginBottom: 25, fontWeight: 700, color: 'white', textShadow:'1px 1px 1px #6C757D'}}>
                        Cursos de Programación
                    </Typography>

                    <Typography variant="subtitle1" component="p" style={{ color: 'white', textShadow: '1px 1px 1px #6C757D'}}>
                        Está es una aplicación desarrollada con React
                    </Typography>
                </Grid>
            </Grid>

            {props.form}
        </Grid>
    )
}

Banner.propTypes = {
    classes : PropTypes.object.isRequired,
    form: PropTypes.element.isRequired
}

const styles = theme => ({
    root: {
        position: 'relative',
        height: '100vh',
        maxHeight: '500px',
        background: theme.palette.secondary.main,

    },

    wrapperContent: {
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: 10
    },

    wrapperImages: {
        position: 'absolute',
        height: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden',
        zIndex: 5
    },

    imgLeft: {
        position: 'absolute',
        left: '-25%',
        width: 800,
        opacity: '.6',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    },

    imgRight: {
        position: 'absolute',
        right: '-23%',
        width: 800,
        opacity: '.6',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        },
    }
})

export default withStyles(styles)(Banner)