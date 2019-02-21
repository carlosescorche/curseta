import React, {Component} from 'react'
import {connect} from 'react-redux'

import {Link} from 'react-router-dom'

import {activeClass} from '../store/actions/clases'
import { searchLesson } from '../store/actions/lesson'

import Player from '../components/player'
import Lessons from '../components/course/Lessons'
import Footer from '../components/tools/Footer'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/createMuiTheme'
import PrimaryAppBar from '../components/tools/AppBar'

class Video extends Component{
    componentDidMount(){
        this.props.active(this.props.match.params.id)
    }
    componentDidUpdate(prevProps){
        if (this.props.match.params.id !== prevProps.match.params.id){
            this.props.active(this.props.match.params.id)
        }

        if (this.props.clases.active === undefined) {
            this.props.history.replace('/')
        }
    }
    render(){
        const course = this.props.course
        const {next,prev,active} = this.props.clases
        
        if(!active) return null
        
        return(
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                
                    <PrimaryAppBar>
                        <Link to={{ pathname: `/curso/${course.id}/${encodeURIComponent(course.name.toLowerCase().split(' ').join('-'))}`}}>Volver al Curso</Link>
                    </PrimaryAppBar>

                    <Player 
                        autoplay={true}
                        src={active.video}
                        title={active.description}
                        prev={prev}
                        next={next}
                   />
                    
                    <Lessons lessons={this.props.lessons} clases={this.props.clases} />
                    
                    <Footer />
                </MuiThemeProvider>
            </React.Fragment> 
        ) 
    }
}


const mapStateToProps = (state) => {
    let { entities: { courses: { active: course } ,lessons,clases}} = state
    let clase = clases.active
    let lessonsArray = []
    
    if (clase && course) {
        course.lessons.forEach(id => {
            if (typeof lessons.items[id] !== 'undefined') {
                let lesson = JSON.parse(JSON.stringify(lessons.items[id])); // creando copia
                lesson['class'] = lesson.class.map(id_clase => {
                    let nextclase = JSON.parse(JSON.stringify(clases.items[id_clase]))
                    if(nextclase.id === clase.id) nextclase['active'] = true
                    return nextclase
                })
                lessonsArray.push(lesson)
            }
        })
    }

    return {
        course,
        clases,
        lessons:lessonsArray
    }
}

const mapDispathToProps = dispatch => {
    return{
        active : (id) => dispatch(activeClass(id)),
        search: (id, text) => dispatch(searchLesson(id, text))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Video)