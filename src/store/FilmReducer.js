const defaultState = {
    totalResults: 1,
    totalPages: 1,
    films: [],
    isLoad: false,
    selectPage: 1,
}

const SET_FILMS = 'SET_FILMS'
const SET_SELECT_PAGE = 'SET_SELECT_PAGE'
const SET_TOTAL_PAGE = 'SET_TOTAL_PAGE'
const SET_TOTAL_RESULT = 'SET_TOTAL_RESULT'


export const filmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FILMS:
            return {
                ...state,
                films: action.payload
            }

        case SET_SELECT_PAGE:
            return {
                ...state,
                selectPage: action.payload
            }

        case SET_TOTAL_PAGE:
            return {
                ...state,
                totalPages: action.payload
            }

        case SET_TOTAL_RESULT:
            return {
                ...state,
                totalResults: action.payload
            }

        default: return state
    }
}


export const loadFilmsFromDB = (payload) => ({type:SET_FILMS, payload})
export const setSelectPage = (payload) => ({type:SET_SELECT_PAGE, payload})
export const setTotalPage = (payload) => ({type:SET_TOTAL_PAGE, payload})
export const setTotalResult = (payload) => ({type:SET_TOTAL_RESULT, payload})