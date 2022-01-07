import { TOTAL_ADD, TOTAL_DELETE, TOTAL_FIND, TOTAL_LOAD_FAILED, TOTAL_LOAD_SUCCESS, TOTAL_UPDATE } from "../contexts/constant"


export const totalReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case TOTAL_LOAD_SUCCESS:
            return {
                ...state,
                totals: payload,
                totalsLoading: false
            }
        
        case TOTAL_LOAD_FAILED:
                return {
                    ...state,
                    totals: payload,
                    totalsLoading: false
                }
            
        case TOTAL_ADD:
            return {
                ...state,
                totals: [...state.totals, payload]
               }


        case TOTAL_FIND:
            return { ...state, total: payload }


        case TOTAL_DELETE:
            return {
                ...state,
                totals: state.totals.filter(total => total._id !== payload)
            }   

        case TOTAL_UPDATE:
                const newtotals = state.totals.map(total =>
                     total._id === payload._id ? payload : total
                )
        
                return {
                    ...state,
                    totals: newtotals
                }
        default:
            return state
    }
}