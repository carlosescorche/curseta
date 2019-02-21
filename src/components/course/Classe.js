import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'

const Classe = ({classes,id,description,active}) => {
	return(<li className={classes.root}>
		<Link to={{ pathname: `/clase/${id}/${encodeURIComponent(description.toLowerCase().split(' ').join('-'))}` }} className={classes.link +" "+ (active ? classes.active : '')}>
				<PlayCircleFilled className={classes.icon}/>
				<Typography variant="body1">{description}</Typography>
		</Link>
	</li>)
}

Classe.propTypes = {
	id: PropTypes.number.isRequired,
	description : PropTypes.string.isRequired,
	active: PropTypes.bool
}

const styles = theme => ({
	root:{
		width: '100%',
		'&:first-child a':{
			borderTopLeftRadius: 7,
			borderTopRightRadius: 7
		},
		'&:last-child a': {
			borderBottomLeftRadius: 7,
			borderBottomRightRadius: 7
		}
	},
	link:{
		display: 'flex',
		background: '#fff',
		padding: '20px 15px',
		flexDirection: 'row',
		alignItems: 'center',
		border: '1px solid #fff',
		borderBottom: '1px solid ' + theme.palette.grey[100],
		textDecoration:'none',
		
		'&:hover':{
			border: '1px solid ' + theme.palette.primary.main
		},
		'&:hover svg':{
			fill: theme.palette.primary.main
		}
	},
	active:{
		border: '1px solid ' + theme.palette.primary.main,
		'& svg': {
			fill: theme.palette.primary.main
		}
	},
	icon:{
		marginRight:15,
		fill: theme.palette.grey[400],
	}
})

export default withStyles(styles)(Classe)