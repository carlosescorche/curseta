import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
//Componentes Material UI
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid'
import {  withStyles } from '@material-ui/core/styles';

function PrimaryAppBar(props) {
    const { classes } = props;

    return (
        <AppBar className={classes.Bar} position="absolute">
            <Grid container alignItems="center" justify="center">
                <Grid item xs md={12} lg={9}>
                    <Grid container alignItems="center" justify="center">
                        <Grid item xs={4}>
                            <Link to="/" className={classes.title}>Curseta</Link>
                        </Grid>
                        <Grid item xs={8} className={classes.links}>
                            {props.children}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    );
}

PrimaryAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


const styles = theme => ({
    Bar: {
        backgroundColor: theme.palette.common.white,
        boxShadow: theme.shadows[1],
        padding: '1.1rem 0',
    },
    title: {
        fontFamily: theme.typography.fontFamily,
        fontSize:20,
        color: theme.palette.primary.light,
        textDecoration:'none',
        fontWeight: 700,
        '&:hover': {
            color: theme.palette.common.black,
        }
    },
    links:{
        display:'flex',
        justifyContent:'flex-end',
        '& a':{
            fontFamily: theme.typography.fontFamily,
            fontSize: 14,
            textTransform:'uppercase',
            color: theme.palette.primary.light,
            marginLeft: 15,
            textDecoration:'none',
            '&:hover':{
                color: theme.palette.common.black,
            }
        }
    }
})

export default withStyles(styles)(PrimaryAppBar);