import data from '../../../shemas'

import {
    SEARCH_COURSE,
    NORMALIZE_COURSE,
    PAGINATE_COURSE,
    REQUEST_COURSE,
    LOADING_PAGINATION,
    ACTIVE_COURSE
} from '../../actions/course'


// reductor para el objeto cursos
const courses = {
    active: null,
    items: data.entities.courses,
    pagination: {
        loading: false,
        items: {},
        page: 0,
        next: true
    },
    results: data.result
};

const coursesReducer = (state = courses, action) => {
    let filter = {}
    switch (action.type) {
        case REQUEST_COURSE:
            return { ...state, isFetching: true }
        case LOADING_PAGINATION:
            return { ...state, pagination: { ...state.pagination, loading: true } }
        case NORMALIZE_COURSE:
            return { ...courses }
        case ACTIVE_COURSE:
            return { ...state, active: state.items[Number(action.id)] }
        case SEARCH_COURSE:
            let { items: oldCourses } = state

            if (action.category !== null) {
                for (let i in oldCourses) {
                    if (Number(oldCourses[i].category) === Number(action.category)) filter[i] = oldCourses[i]
                }
            } else {
                for (let i in oldCourses) {
                    if (oldCourses[i].name.toUpperCase().indexOf(action.filter.toUpperCase()) !== -1) filter[i] = oldCourses[i]
                }
            }
            return { ...state, items: filter, lastUpdated: new Date() }

        case PAGINATE_COURSE:
            let { items: all, pagination: { page, next } } = state;
            let pag = page + 1
            let array = Object.entries(all);

            let nextPage = action.perPage * pag
            nextPage = nextPage <= array.length ? nextPage : array.length

            let slice = array.slice(0, nextPage)

            slice.forEach(course => filter[course[0]] = course[1])

            if (Object.values(filter).length >= array.length) next = false

            return { ...state, isFetching: false, pagination: { items: filter, page: pag, next } }
        default:
            return state
    }
}

export default coursesReducer