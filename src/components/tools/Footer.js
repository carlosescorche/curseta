import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'

const styles = theme => ({
    root:{
        padding:'3rem 0 2rem'
    },

    link: {
        fontFamily: theme.typography.fontFamily,
        fontSize: 19,
        color: 'rgba(0,0,0,.3)',
        textDecoration: 'none',
        fontWeight: 700,
        '&:hover': {
            color: theme.palette.primary.light,
        }
    },
})

export default withStyles(styles)(props => {
    return (
        <Grid container className={props.classes.root} alignContent="center" justify="center">
            <Link to="/" className={props.classes.link}>Curseta</Link>
        </Grid>
    )
})