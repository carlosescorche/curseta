import React from 'react'
import PropTypes from 'prop-types'
import Classe from '../course/Classe'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const Lessons = props => {
    const {classes,lessons} = props 
    
    return(
        <Grid container className={classes.root}>
            {
                lessons.length > 0 ?
                        
                        <Grid item xs md={10} lg={6} className={classes.center}>
                            {
                                lessons.map(lesson => 
                                    <Grid item xs key={lesson.id} className={classes.wrapper}>
                                        <Typography variant="body1" className={classes.title}> {lesson.name} </Typography>

                                        <Grid container>
                                            <ul className={classes.ul}>
                                                {Object.values(lesson.class).map(clase => 
                                                    <Classe {...clase} key={clase.id} />
                                                )}
                                            </ul>
                                        </Grid>
                                    </Grid>
                                )
                            }
                        </Grid>
                   
                        :
                   
                        <Grid item xs md={12} lg={6} style={{ margin: '20px auto', textAlign: 'center' }}>
                            <Typography variant="body1">No hay contenido</Typography>
                        </Grid>
            }
        </Grid>
    )
}

Lessons.propTypes = {
     lessons : PropTypes.array.isRequired,
}

const styles = {
    center:{
        margin: '15px auto'
    },
    wrapper:{
        padding: '20px 0 15px'
    },
    title:{
        fontWeight:700,
        marginBottom:15
    },
    ul:{
        width:'100%',
        textDecoration:'none',
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none',
        padding: 0,
        margin:0
    }
}

export default withStyles(styles)(Lessons)