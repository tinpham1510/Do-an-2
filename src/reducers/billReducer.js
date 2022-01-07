import { BILL_ADD, BILL_DELETE, BILL_LOAD_FAILED, BILL_LOAD_SUCCESS, BILL_UPDATE } from "../contexts/constant"


export const billReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case BILL_LOAD_SUCCESS:
            return {
                ...state,
                bills: payload,
                billsLoading: false
            }
        
        case BILL_LOAD_FAILED:
                return {
                    ...state,
                    bills: payload,
                    billsLoading: false
                }
            
        case BILL_ADD:
            return {
                ...state,
                bills: [...state.bills, payload]
               }

        case BILL_FIND:
            return { ...state, bill: payload }
    
        case BILL_DELETE:
            return {
                ...state,
                bills: state.bills.filter(bill => bill._id !== payload)
            }   

            case BILL_UPDATE:
                const newbills = state.bills.map(bill =>
                     bill._id === payload._id ? payload : bill
                )
        
                return {
                    ...state,
                    bills: newbills
                }
        default:
            return state
    }
}