import React from 'react'
import PropTypes from 'prop-types'

//Componentes Material UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const Filter = (props) => {
    const {classes,categories,form,handleChange,handleSubmit,handleSelect} = props

    return(
        <Grid item sm={11} md={9} lg={7} style={{ zIndex: 20 }}>
            <Paper className={classes.paper} component="div">
                <Grid container direction="row" alignItems="center" justify="center">
                    <form id="filter" onSubmit={(e) => handleSubmit(e)} style={{display:'flex',width:'100%'}}>
                        <Paper className={classes.paperSearch}>
                            <IconButton disabled={true} className={classes.iconButton} aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase className={classes.input} name="filter" value={form.filter} placeholder="Buscar cursos" onChange={(e) => handleChange(e)}/>
                        </Paper>
                        <Button type="submit" className={classes.buttonSearch} color="primary" variant="contained" size="large">Buscar</Button>
                    </form>
                </Grid>

                <Grid container direction="row" alignItems="baseline" justify="flex-start">
                    <Typography className={classes.label}>
                        <strong>Categorias</strong>
                    </Typography>
                    {
                        Object.values(categories).map((category,key) => {
                            return(<Fab 
                                variant="extended" 
                                size="small" 
                                key={key} 
                                onClick={(e) => handleSelect(category.id)}
                                className={classes.fabSearch} 
                                style={{ background: category.color }} > {category.name} 
                                </Fab>)
                        })
                    }
                 </Grid>
            </Paper>
        </Grid>)
}

Filter.propTypes = {
    classes: PropTypes.object.isRequired
}


const styles = theme => ({
    paper: {
        position: 'relative',
        padding: '2rem 1rem 1.2rem',
        bottom: '-80px'
    },

    label: {
        marginRight: 15,
        textTransform: 'uppercase',
        fontSize: '0.8rem'
    },

    input: {
        width: 'calc(100% - 48px)',
        lineHeight: '2.4em'
    },
    buttonSearch: {
        width: 170
    },

    paperSearch: {
        background: theme.palette.grey[100],
        width: 'calc(100% - 190px)',
        marginRight: 20
    },

    fabSearch: {
        fontSize: 12,
        margin: '15px 5px 0',
    }
})


export default withStyles(styles)(Filter)