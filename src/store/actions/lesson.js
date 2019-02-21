export const SEARCH_LESSON = 'SEARCH_LESSON'
export const NORMALIZE_LESSON = 'NORMALIZE_LESSON'

export const searchLesson = (course,text) =>({
    type : SEARCH_LESSON,
    course,
    text
})


