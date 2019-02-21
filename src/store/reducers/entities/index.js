import {combineReducers} from 'redux'

import lessonsReducer from './lessons'
import clasesReducer from './clases'
import categoryReducer from './categories'
import coursesReducer from './courses'


// Combinando reducers
const entities = combineReducers({
    courses: coursesReducer,
    lessons: lessonsReducer,
    clases: clasesReducer,
    categories : categoryReducer
})

export default entities