import axios from "axios";
import { createContext, useReducer } from "react";
import { customerReducer } from "../reducers/customerReducer";
import { apiUrl, CUSTOMER_ADD, CUSTOMER_DELETE, CUSTOMER_FIND, CUSTOMER_LOAD_FAILED, CUSTOMER_LOAD_SUCCESS, CUSTOMER_UPDATE } from "./constant";



export const CustomerContext = createContext()

const CustomerContextProvider = ({children}) =>{

    const [customerState, dispatch] = useReducer(customerReducer,{
        customer: null, 
        customers: [],
        customersLoading: true
    })

    const getCustomersId = async customerId =>{
        try {
            const reponse = await axios.get(`${apiUrl}/customers/${customerId}`)
            if(reponse)
            {
                dispatch({type: CUSTOMER_LOAD_SUCCESS, payload: reponse.data.customers})
            }
        } catch (error) {
            dispatch({type: CUSTOMER_LOAD_FAILED})
        }
    }
/// get all customer
    const getCustomers = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/customers`)
            if(reponse)
            {
                dispatch({type: CUSTOMER_LOAD_SUCCESS, payload: reponse.data.customers})
            }
        } catch (error) {
            dispatch({type: CUSTOMER_LOAD_FAILED})
        }
    }

        //// 
        const addCustomers = async newCustomer => {
            try {
                const response = await axios.post(`${apiUrl}/customers`, newCustomer)
    
                if (response.data.success) {
                    dispatch({ type: CUSTOMER_ADD, payload: response.data.customer })
                    return response.data
                }
            } catch (error) {
                return error.response.data
                    ? error.response.data
                    : { success: false, message: 'Server error' }
            
            }
        }
        ///
    //// 
    const findCustomers = customerId => {
		const customer = customerState.customers.find(customer=> customer._id === customerId)
		dispatch({ type: CUSTOMER_FIND, payload: customer })
	}

    // Update customer
	const updateCustomers = async updatedCustomer => {
		try {
			const response = await axios.put(
				`${apiUrl}/customers/${updatedCustomer._id}`,
				updatedCustomer
			)
			if (response.data.success) {
				dispatch({ type: CUSTOMER_UPDATE , payload: response.data.customer })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    ////
    const deleteCustomers = async customerId=>{
        try {
            const reponse = await axios.delete(`${apiUrl}/customers/${customerId}`)
            if(reponse.data.success)
            {
                dispatch({type: CUSTOMER_DELETE, payload: customerId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const customerContextData = {customerState, 
        getCustomers, 
        deleteCustomers, 
        findCustomers, 
        getCustomersId,
        addCustomers,
        updateCustomers
    }
    return (
        <CustomerContext.Provider value={customerContextData}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerContextProvider;