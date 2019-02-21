import data from '../../../shemas'

//reductor para el objeto categorias
const categories = {
    items: data.entities.categories
};

const categoryReducer = (state = categories, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default categoryReducer