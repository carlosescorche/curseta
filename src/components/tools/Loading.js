import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem 0 0'
    },
    button: {
        margin: theme.spacing.unit * 2,
    }
});

function Loading({classes,loading,handleLoading}) {
    return (
        <div className={classes.root}>
            <Fade
                in={loading}
                style={{
                    transitionDelay: loading ? '800ms' : '0ms',
                }}
                unmountOnExit
            >
                <CircularProgress />
            </Fade>
        
            {!loading &&
                <Button variant="contained" className={classes.button} onClick={(e) => handleLoading(e)}> Cargar Más </Button>
            }
        </div>
    );
}

export default withStyles(styles)(Loading);