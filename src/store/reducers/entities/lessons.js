import {SEARCH_LESSON} from '../../actions/lesson'
import data from '../../../shemas'

const lessons = {
    items: data.entities.lessons
};

export default (state = lessons, action) => {
    switch (action.type) {
        case SEARCH_LESSON:
            return search(state,action)
        default:
            return state
    }
}

// funciones
function search(state,action){
    const filter = {}
    const lessons = data.entities.lessons

    for(let i in lessons){
        if (Number(lessons[i].course_id) === Number(action.course) && lessons[i].name.toLowerCase().indexOf(action.text.toLowerCase()) !== -1){
            filter[i] = lessons[i]
        } 
    }

    return {...state,items:filter}
}