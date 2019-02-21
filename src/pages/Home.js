import React from 'react'

import Card from '../components/course/Card'
import Filter from '../components/tools/Filter'
import Banner from '../components/tools/Banner'
import Loading from '../components/tools/Loading'
import Footer from '../components/tools/Footer'

//Redux 
import {connect} from 'react-redux'

//acciones
import { searchCourse, paginateCourses, nextPage} from '../store/actions/course'

//componentes Material UI
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from '../theme/createMuiTheme'
import PrimaryAppBar from '../components/tools/AppBar'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Fade from '@material-ui/core/Fade'
import CircularProgress from '@material-ui/core/CircularProgress';

class Courses extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form : { 
                filter : '', 
                category : null 
            }
        }
    }

    componentDidMount(){
        this.props.search('', null)
    }

    handleChange = e => {
        let form = {}
            form[e.target.name] = e.target.value
            form['category'] = null

        this.setState((state) => {
            return { form: Object.assign(state.form,form) }
        })
    }

    handleSubmitFilter = e => {
        const { filter, category } = this.state.form
        this.props.search(filter,category)
        e.preventDefault()
    }

    handleSelectCategory = id_category => {
        let category = this.props.categories.items[id_category].name 
        this.setState(state => ({form: {...state.form,filter:category,category:id_category}}))
    }

    handleShowCourse = course => {
        this.props.history.push(`/curso/${course.id}/${encodeURIComponent(course.name.toLowerCase().split(' ').join('-'))}`)
    }
    
    render(){

        const { courses:{isFetching,pagination : {items,next,loading}}, categories: { items: categories }} = this.props
        
        const courses = Object.values(items)
        
        return(
            <MuiThemeProvider theme={theme}>
                <PrimaryAppBar />
                <Banner form={<Filter 
                                    form={this.state.form}
                                    categories={categories} 
                                    handleChange={this.handleChange}
                                    handleSubmit={this.handleSubmitFilter} 
                                    handleSelect={this.handleSelectCategory}/>}/>
                
                <Grid container alignContent="center" justify="center" style={{paddingTop:'10rem'}}>
                    {
                        !isFetching ?
                        <React.Fragment>
                            <Grid item xs md={12} lg={9}>
                                <Grid container alignContent="center" justify="flex-start">
                                        {
                                            courses.length > 0 ?
                                                courses.map((course, key) => (
                                                    <Grid item md={4} key={key}>
                                                        <Card
                                                            course={course}
                                                            category={categories[course.category]}
                                                            show={this.handleShowCourse} />
                                                    </Grid>
                                                ))
                                                :
                                                <Grid container justify="center">
                                                    <Typography component="p">No hay Registros</Typography>
                                                </Grid>
                                        }
                                </Grid>
                            </Grid>
                            <Grid item xs sm={9}>
                                <Grid container alignContent="center" justify="center">
                                {
                                    next &&
                                    <Loading loading={loading} handleLoading={() => this.props.nextPage()} />
                                }
                                </Grid>
                            </Grid>
                        </React.Fragment>
                        :
                        <Grid item xs sm={9}>
                            <Grid container alignContent="center" justify="center">
                                <Fade in={isFetching} style={{ transitionDelay: isFetching ? '800ms' : '0ms', }} unmountOnExit >
                                    <CircularProgress />
                                </Fade>
                            </Grid>
                        </Grid>
                    }
                </Grid>
                <Footer />
            </MuiThemeProvider>   
        )
    }
}

const mapStateToProps = state => {
    let {entities:{categories,courses}} = state
    
    return{
        categories,
        courses
    }
}

const mapDispathtoprops = dispatch => {
    return{
        search : (filter,category) => dispatch(searchCourse(filter,category)),
        paginate : () => dispatch(paginateCourses()),
        nextPage : () => dispatch(nextPage())
    }
}

export default connect(mapStateToProps,mapDispathtoprops)(Courses)