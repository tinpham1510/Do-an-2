import axios from "axios";
import { createContext, useReducer } from "react";
import { receiptReducer } from "../reducers/receiptReducer";
import { apiUrl, RECEIPT_ADD, RECEIPT_DELETE, RECEIPT_FIND, RECEIPT_LOAD_FAILED, RECEIPT_LOAD_SUCCESS, RECEIPT_UPDATE } from "./constant";


export const ReceiptContext = createContext()

const ReceiptContextProvider = ({children}) =>{

    const [receiptState, dispatch] = useReducer(receiptReducer,{
        receipt: null,
        receipts: [],
        receiptsLoading: true
    })
    /// get id receipt
    const getReceiptsId = async receiptId =>{
        try {
            const reponse = await axios.get(`${apiUrl}/receipts/room${receiptId}`)
            if(reponse)
            {
                dispatch({type: RECEIPT_LOAD_SUCCESS, payload: reponse.data.receipts})
            }
        } catch (error) {
            dispatch({type: RECEIPT_LOAD_FAILED})
        }
    }
/// get all room
    const getReceipts = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/receipts`)
            if(reponse)
            {
                dispatch({type: RECEIPT_LOAD_SUCCESS, payload: reponse.data.receipts})
            }
        } catch (error) {
            dispatch({type: RECEIPT_LOAD_FAILED})
        }
    }
    /// add Receipt
    const addReceipts = async newReceipt => {
		try {
			const response = await axios.post(`${apiUrl}/receipts`, newReceipt)

			if (response.data.success) {
				dispatch({ type: RECEIPT_ADD, payload: response.data.receipt })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    ///
     const findReceipts = receiptId => {    
		const receipt = receiptState.receipts.find(receipt => receipt._id === receiptId)
		dispatch({ type: RECEIPT_FIND, payload: receipt })
	}

    /// update Receipt
    const updateReceipts = async updatedReceipt => {
		try {
			const response = await axios.put(
				`${apiUrl}/receipts/${updatedReceipt._id}`,
				updatedReceipt
			)
			if (response.data.success) {
				dispatch({ type: RECEIPT_UPDATE, payload: response.data.receipt })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

    /// delete Receipt
    const deleteReceipts = async receiptId =>{
        try {
            const reponse = await axios.delete(`${apiUrl}/receipts/${receiptId}`)
            if(reponse.data.success)
            {
                dispatch({type: RECEIPT_DELETE, payload: receiptId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const ReceiptContextData = {
        receiptState,
        getReceipts, 
        addReceipts, 
        deleteReceipts,
        findReceipts,
        updateReceipts,
        getReceiptsId
    }
    return (
        <ReceiptContext.Provider value={ReceiptContextData}>
            {children}
        </ReceiptContext.Provider>
    )
}
export default ReceiptContextProvider;