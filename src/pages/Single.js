import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {searchLesson} from '../store/actions/lesson'

import Banner from '../components/course/Banner'
import Lessons from '../components/course/Lessons'
import Filter from '../components/course/Filter'
import Footer from '../components/tools/Footer'

import {activeCourse} from '../store/actions/course'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/createMuiTheme'
import PrimaryAppBar from '../components/tools/AppBar'

class Single extends Component{
    
    componentDidMount() {
        this.props.activeCourse(this.props.match.params.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.activeCourse(this.props.match.params.id)
        }

        if(this.props.course === undefined){
            this.props.history.replace('/')
        }
    }

    handleChangeFilter = event => {
        this.props.search(this.props.course.id,event.target.value)
    }

    render(){
        
        return(
            <React.Fragment>
                {this.props.course &&
                    <MuiThemeProvider theme={theme}>
                            <PrimaryAppBar>
                                <Link to="/">Todos los Cursos</Link>
                            </PrimaryAppBar>
                    
                            <Banner course={this.props.course} />
                            
                            <Filter handleChange={this.handleChangeFilter}/>
                            
                            <Lessons lessons={this.props.lessons}/>

                            <Footer />
                    </MuiThemeProvider>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    let { entities: { courses : {active : course }, clases, lessons} } = state
    let lessonsArray = []

    if(course){
        course.lessons.forEach(id => {
            if (typeof lessons.items[id] !== 'undefined'){
                let lesson = JSON.parse(JSON.stringify(lessons.items[id])); // creando copia
                lesson['class'] = lesson.class.map(clase => clases.items[clase])
                lessonsArray.push(lesson)
            }
        })
    }
    
    return{ 
        course,
        lessons : lessonsArray
    }
}

const mapDispathToProps = dispatch => {
    return{
        activeCourse : id => dispatch(activeCourse(id)),
        search : (id,text) => dispatch(searchLesson(id,text))
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Single)