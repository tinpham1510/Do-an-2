import axios from "axios";
import { createContext, useReducer } from "react";
import { billReducer } from "../reducers/billReducer";
import { apiUrl, BILL_ADD, BILL_DELETE, BILL_FIND, BILL_LOAD_FAILED, BILL_LOAD_SUCCESS, BILL_UPDATE} from "./constant";



export const BillContext = createContext()

const BillContextProvider = ({children}) =>{

    const [billState, dispatch] = useReducer(billReducer,{
        bill: null, 
        bills: [],
        billsLoading: true
    })

/// get all bill
    const getBills = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/bills`)
            if(reponse)
            {
                dispatch({type: BILL_LOAD_SUCCESS, payload: reponse.data.bills})
            }
        } catch (error) {
            dispatch({type: BILL_LOAD_FAILED})
        }
    }

        //// 
        const addBills = async newbill => {
            try {
                const response = await axios.post(`${apiUrl}/bills`, newbill)
    
                if (response.data.success) {
                    dispatch({ type: BILL_ADD, payload: response.data.bill })
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
    const findBills = billId => {
		const bill = billState.bills.find(bill=> bill._id === billId)
		dispatch({ type: BILL_FIND, payload: bill })
	}

    // Update bill
	const updateBills = async updatedbill => {
		try {
			const response = await axios.put(
				`${apiUrl}/bills/${updatedbill._id}`,
				updatedbill
			)
			if (response.data.success) {
				dispatch({ type: BILL_UPDATE , payload: response.data.bill })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    ////
    const deleteBills = async billId=>{
        try {
            const reponse = await axios.delete(`${apiUrl}/bills/${billId}`)
            if(reponse.data.success)
            {
                dispatch({type: BILL_DELETE, payload: billId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const billContextData = {billState, 
        getBills, 
        deleteBills, 
        findBills, 
        addBills,
        updateBills
    }
    return (
        <BillContext.Provider value={billContextData}>
            {children}
        </BillContext.Provider>
    )
}
export default BillContextProvider;