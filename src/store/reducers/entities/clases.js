import { ACTIVE_CLASS  } from '../../actions/clases'
import data from '../../../shemas'

//reductor para el objeto clases
const clases = {
    items: data.entities.clases,
    active:null,
    prev:null,
    next:null
};

const clasesReducer = (state = clases, action) => {
    switch (action.type) {
        case ACTIVE_CLASS:
            let active = state.items[Number(action.id)],
            next = null,
            prev = null
            
            if(active){
                next = Object.values(state.items).find(clase => clase.course_id === active.course_id && clase.id > active.id)
                prev = Object.values(state.items).reverse().find(clase => clase.course_id === active.course_id && clase.id < active.id)
            }

            return {...state,active,prev,next}
        default:
            return state
    }
}

export default clasesReducer