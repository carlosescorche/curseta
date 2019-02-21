import React from 'react'
import PropTypes from 'prop-types'


import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const Filter = props => {
    const {classes} = props
    return(
        <Grid container className={classes.root}>
            <Grid item xs md={10} lg={6} className={classes.wrapper}>
                <Grid container alignItems="center" className={classes.container}>
                    <Grid item xs={6}>
                        <Typography variant="h2" className={classes.title}>Contenido del curso</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={1}>
                            <InputBase className={classes.input} placeholder="Buscar Lecciones" onChange={e => props.handleChange(e)}/>
                            <IconButton className={classes.iconButton} aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

Filter.propTypes = {
    classes : PropTypes.object.isRequired,
    handleChange : PropTypes.func.isRequired
}

const styles = {
    root : {
        padding:'40px 10px 15px'
    },
    wrapper:{
        margin: '0 auto',
        textAlign: 'right'
    },
    container : {
        padding: '15px 15px',
        background: 'rgba(0, 0, 0, .03)',
        borderRadius: 7
    },
    title:{
        fontSize: '1.1rem',
        fontWeight:700,
        textAlign:'left'
    },
    input: {
        marginLeft: 8,
        flex: 1,
        width:'calc(100% - 60px)'
    },
    iconButton: {
        padding: 10,
    },
}

export default withStyles(styles)(Filter)
