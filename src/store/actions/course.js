import { searchLesson } from './lesson'

export const SEARCH_COURSE = 'SEARCH_COURSE'
export const NORMALIZE_COURSE = 'NORMALIZE_COURSE'
export const REQUEST_COURSE = 'REQUEST_COURSE'
export const LOADING_PAGINATION = 'LOADING'
export const PAGINATE_COURSE = 'PAGINATE_COURSE' 
export const ACTIVE_COURSE = 'ACTIVE_COURSE'


//Numero de items por página
const perPage = 6

export const actionSearchCourse = (filter,category) => ({
    type : SEARCH_COURSE,
    filter : filter,
    category : category
})

export const normalizeCourse = () => ({
    type : NORMALIZE_COURSE
})


export const paginateCourses = () => ({
    type : PAGINATE_COURSE,
    perPage 
})

export const requestCourse = () => ({
    type : REQUEST_COURSE
})


export const loadingPagination = () => ({
    type: LOADING_PAGINATION
})

export const activeCourse  = id => (dispatch, getState) => {

    dispatch({ type: ACTIVE_COURSE, id });

    const { entities: { courses: { active: course } } } = getState();

    if (course) {
        dispatch(searchLesson(course.id, ''))
    }

}

export const searchCourse = (filter, category) => (dispatch, getState) => {

    dispatch(requestCourse())

    setTimeout(() => {
        dispatch(normalizeCourse())
        dispatch(actionSearchCourse(filter, category))
        dispatch(paginateCourses())
    }, 1000)
}

export const nextPage = () => (dispatch,getState) => {
    dispatch(loadingPagination())

    setTimeout(() => {
        dispatch(paginateCourses())
    },1000)
}








