import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import TuneIcon from '@material-ui/icons/Tune'
import { withStyles } from '@material-ui/core/styles'

const Banner = props => {
    const {classes,course} = props 

    return (
        <React.Fragment>
            <Grid container alignItems="center" justify="center" className={classes.root} style={{ backgroundColor: course.color }}>
                    <img src={course.image} alt="imagen del curso" width="80"></img>
            </Grid>
            <Grid container alignItems="center" justify="center" className={classes.titleBar}>
                <Grid item xs={12} className={classes.textCenter}>
                    <Typography variant="h1" className={classes.title}>
                        {course.name}
                    </Typography>
                </Grid>
                <Grid item xs md={12} lg={6} className={classes.textCenter}>
                    <Grid container alignItems="center" justify="center" className={`${classes.textCenter} ${classes.attrs}`}>
                        <Grid item xs>
                            <ScheduleIcon/> <Typography variant="subtitle2" component="small">{course.hours}</Typography>
                        </Grid>

                        <Grid item xs>
                            <PlayCircleOutlineIcon/><Typography variant="subtitle2" component="small">{course.numberClass} Clases</Typography>
                        </Grid>

                        <Grid item xs>
                            <TuneIcon/> <Typography variant="subtitle2" component="small">{course.level}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    </React.Fragment>)
}

Banner.propTypes = {
    classes : PropTypes.object.isRequired,
    course : PropTypes.object.isRequired
}

const styles = (theme) => ({
    root: {
        minHeight: 300,
        paddingTop: 50
    },
    titleBar: {
        background: 'white',
        padding: '1rem 0 0rem',
        boxShadow: theme.shadows[1]
    },
    title: {
        fontSize: '1.4rem',
        marginTop: 20,
        marginBottom: 20
    },
    textCenter: {
        textAlign: 'center',
        margin: '0 auto'
    },
    attrs: {
        borderTop: '1px solid ' + theme.palette.grey[100],
        padding: '.5rem 0'
    },
})

export default withStyles(styles)(Banner)