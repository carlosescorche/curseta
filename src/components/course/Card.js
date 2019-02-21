import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import TuneIcon from '@material-ui/icons/Tune'
import {withRouter} from 'react-router-dom'

function CourseCard(props) {
	const { classes,course,category,show} = props;

	return (
		<Card className={classes.card}>
			<CardActionArea onClick={() => show(course)}>
				<CardMedia
					className={classes.media}
					image={course.image}
					style={{ backgroundColor:course.color }}
				>

				<div className={classes.category}>
					<div className={classes.categoryColor} style={{ backgroundColor:category.color}}></div>
					<Typography variant="subtitle2" component="small" className={classes.CategoryText}>
						{category.name}
					</Typography>
				</div>

				</CardMedia>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h6" component="h2">
						{course.name}
					</Typography>

					<Grid container alignItems="center" justify="flex-start" className={classes.wrapperAvatar}>
						<Avatar alt="Remy Sharp" src={course.teacher.image} className={classes.avatar} />
						<Typography variant="subtitle2" component="span">{course.teacher.name}</Typography>
					</Grid>

					<Typography component="p">
						{course.description} 
					</Typography>

					<Grid container alignItems="center" justify="flex-start">
						
						<Grid item xs className={classes.wrapperIcon}>
							<ScheduleIcon className={classes.icons}/> 
							<Typography variant="subtitle2" component="small">{course.hours}</Typography>
						</Grid>

						<Grid item xs className={classes.wrapperIcon}>
							<PlayCircleOutlineIcon className={classes.icons} /><Typography variant="subtitle2" component="small">{course.numberClass} Clases</Typography>
						</Grid>

						<Grid item xs className={classes.wrapperIcon}>
							<TuneIcon className={classes.icons} /> <Typography variant="subtitle2" component="small">{course.level}</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
			<CardActions className={classes.actions}>
				<Button variant="contained" size="large" color="primary" style={{ width: '100%' }} onClick={() => show(course)}>
					VER CURSO
				</Button>
			</CardActions>
		</Card>
	);
}

CourseCard.propTypes = {
	classes: PropTypes.object.isRequired,
	course : PropTypes.object.isRequired,
	category : PropTypes.object.isRequired,
	show : PropTypes.func.isRequired
};

const styles = theme => ({
	card: {
		maxWidth: 345,
		margin: '0 15px 2rem',
		[theme.breakpoints.up('lg')]: {
			margin: '0 auto 2rem',
		},
	},
	media: {
		position: 'relative',
		height: 190,
		backgroundSize: 85
	},
	content: {
		paddingBottom: 0
	},
	actions: {
		padding: '20px 20px 20px'
	},
	wrapperAvatar: {
		marginBottom: 11
	},
	avatar: {
		width: 35,
		height: 35,
		marginRight: 15
	},
	wrapperIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '.8rem 0',
		margin: '1.5rem 0 0',
		borderTop: `1px solid ${theme.palette.grey[100]}`
	},
	icons: {
		width: '.8em',
		height: '.8em',
		marginRight: 5
	},
	category: {
		position: 'absolute',
		bottom: 0,
		right: 15,
		backgroundColor: 'rgba(255,255,255,.3)',
		borderTopLeftRadius: 5,
		borderTopRightRadius: 5,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '.2rem .5rem'
	},
	categoryColor: {
		width: 10,
		height: 10,
		borderRadius: '100%',
		backgroundColor: theme.palette.primary.light,
		marginRight: 5
	},
	categoryText: {
		color: 'white'
	}
});


export default withRouter(withStyles(styles)(CourseCard))