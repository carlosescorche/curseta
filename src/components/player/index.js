import React from 'react'
import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SkipNext from '@material-ui/icons/SkipNext'
import SkipPrevious from '@material-ui/icons/SkipPrevious'

import VideoPlayerLayout from './components/video-player-layout';
import Video from './components/video';
import Title from './components/title';
import PlayPause from './components/play-pause';
import Timer from './components/timer.js';
import Controls from './components/video-player-controls.js';
import ProgressBar from './components/progress-bar';
import Spinner from './components/spinner';
import Volume from './components/volume';
import FullScreen from './components/full-screen';

class Player extends React.Component{
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });
    }
    handleTimeUpdate = event => {
        // console.log(this.video.currentTime)
        this.setState({
            currentTime: this.video.currentTime
        })
    }
    handleProgressChange = event => {
        // event.target.value
        this.video.currentTime = event.target.value
    }
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
    }
    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            // mando a full screen
            this.player.webkitRequestFullscreen()
        } else {
            document.webkitExitFullscreen();
            // salgo del full screen
        }
    }

    toClase = clase => {
        let url = `/clase/${clase.id}/${encodeURIComponent(clase.description.toLowerCase().split(' ').join('-'))}`
        this.props.history.push(url)
    }

    setRef = element => {
        this.player = element
    }
    render(){
        const {classes} = this.props
        return(
            <React.Fragment>
            <Grid container alignContent="center" justify="center" className={classes.root}>
                <Grid item xs md={11} lg={9}>
                    <VideoPlayerLayout
                        setRef={this.setRef}
                    >
                        <Title
                            title={this.props.title}
                        />
                        <Controls>
                            <PlayPause
                                pause={this.state.pause}
                                handleClick={this.togglePlay}
                            />
                            <Timer
                                duration={this.state.duration}
                                currentTime={this.state.currentTime}
                            />
                            <ProgressBar
                                duration={this.state.duration}
                                value={this.state.currentTime}
                                handleProgressChange={this.handleProgressChange}
                            />
                            <Volume
                                handleVolumeChange={this.handleVolumeChange}
                            />
                            <FullScreen
                                handleFullScreenClick={this.handleFullScreenClick}
                            />
                        </Controls>
                        <Spinner
                            active={this.state.loading}
                        />
                        <Video
                            autoplay={this.props.autoplay}
                            pause={this.state.pause}
                            handleLoadedMetadata={this.handleLoadedMetadata}
                            handleTimeUpdate={this.handleTimeUpdate}
                            handleSeeking={this.handleSeeking}
                            handleSeeked={this.handleSeeked}
                            src={this.props.src}
                        />
                    </VideoPlayerLayout>
                </Grid>
            </Grid> 
            <Grid container alignContent="center" justify="center" className={classes.barTitle}>
                   <Grid item xs md={11} lg={9}>
                        <Grid container>
                            <Grid item xs sm={6}>
                                <Typography variant="h1" className={classes.title}>{this.props.title}</Typography>
                            </Grid>
                            <Grid item xs sm={6} className={classes.wrapperButton}>
                                {
                                    this.props.prev &&
                                    <Button onClick={() => this.toClase(this.props.prev)} variant="outlined" size="small" color="primary">
                                        <SkipPrevious />
                                    </Button>
                                }
                                {
                                    this.props.next &&
                                    <Button onClick={() => this.toClase(this.props.next)} variant="contained" size="small" color="primary" className={classes.margin}>
                                        <SkipNext /> {this.props.next.description.substring(0, 25) + '...'}
                                    </Button>
                                }
                            </Grid>
                        </Grid> 
                   </Grid>
            </Grid>
            </React.Fragment>
        )
    }
}

const styles = (theme) => ({
    root : {
        background:'#0d0d0d',
        marginTop:60
    },
    barTitle:{
        background: 'white',
        padding: '1rem 0',
        boxShadow: theme.shadows[1]
    },
    title: {
        fontSize: '1.4rem',
        marginTop: 20,
        marginBottom: 20
    },
    wrapperButton:{
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-end',
        '& button':{
            marginLeft:15
        }
    }
});

export default withRouter(withStyles(styles)(Player))