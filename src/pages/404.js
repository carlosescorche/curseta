import React from 'react'

import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = {
    root:{
        height:'100vh',
        width:'100vw'
    }
}

export default withStyles(styles)(props => {
    return(
        <Grid container className={props.classes.root} alignContent="center" justify="center">
                <Typography variant="h1">404</Typography>
        </Grid>
    )
})