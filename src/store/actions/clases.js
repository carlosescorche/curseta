import {activeCourse} from './course'

export const ACTIVE_CLASS = 'ACTIVE_CLASS'

export const activeClass = id => (dispatch,getState) => {
    
    dispatch({ type:ACTIVE_CLASS, id });

    const {entities:{clases:{active : clase}}} = getState();

    if(clase)
        dispatch(activeCourse(clase.course_id))
    
}

