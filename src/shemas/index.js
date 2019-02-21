import {normalize,schema} from 'normalizr'
import data from '../api/courses'

const clase =  new schema.Entity('clases',{},{
	idAttribute: 'id',
	processStrategy: (value, parent) => ({ ...value, lesson_id: parent.id, course_id: parent.course_id })
})

const lesson = new schema.Entity('lessons', {class : [clase]}, {
	idAttribute : 'id',
	processStrategy : (value,parent,key) => ({...value,course_id : parent.id})
})

const category = new schema.Entity('categories',{},{
	idAttribute : 'id',
	processStrategy: (value,parent,key) => ({...value, course_id: parent.id})
})

const course = new schema.Entity('courses', { lessons: [lesson], category: category },{
	idAttribute : 'id'
})

const obj = {courses:[course]};


const normalizeData = normalize(data,obj)

console.log(normalizeData);
export default normalizeData


