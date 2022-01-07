import { CUSTOMER_ADD, CUSTOMER_DELETE, CUSTOMER_FIND, CUSTOMER_LOAD_FAILED, CUSTOMER_LOAD_SUCCESS, CUSTOMER_UPDATE } from "../contexts/constant"


export const customerReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case CUSTOMER_LOAD_SUCCESS:
            return {
                ...state,
                customers: payload,
                customersLoading: false
            }
        
        case CUSTOMER_LOAD_FAILED:
            return {
                ...state,
                customers: payload,
                customersLoading: false
            }

        case CUSTOMER_ADD:
            return {
                ...state,
                customers: [...state.customers, payload]
                }
        
        case CUSTOMER_FIND:
            return { ...state, customer: payload }

        case CUSTOMER_DELETE:
            return {
                ...state,
				customers: state.customers.filter(customer => customer._id !== payload)
            }

        case CUSTOMER_UPDATE:
            const newCustomers = state.customers.map(customer =>
                customer._id === payload._id ? payload : customer
            )
        
            return {
                ...state,
                customers: newCustomers
            }
        
        default:
            return state
    }
}