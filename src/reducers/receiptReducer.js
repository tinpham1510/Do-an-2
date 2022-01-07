import { RECEIPT_ADD, RECEIPT_DELETE, RECEIPT_FIND, RECEIPT_LOAD_FAILED, RECEIPT_LOAD_SUCCESS, RECEIPT_UPDATE } from "../contexts/constant"



export const receiptReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case RECEIPT_LOAD_SUCCESS:
            return {
                ...state,
                receipts: payload,
                receiptsLoading: false
            }
        
        case RECEIPT_LOAD_FAILED:
            return {
                ...state,
                receipts: payload,
                receiptsLoading: false
            }

        case RECEIPT_ADD:
            return {
                ...state,
                receipts: [...state.receipts, payload]
                }
        
        case RECEIPT_FIND:
            return { ...state, receipt: payload }

        case RECEIPT_DELETE:
            return {
                ...state,
				receipts: state.receipts.filter(receipt => receipt._id !== payload)
            }

        case RECEIPT_UPDATE:
            const newreceipts = state.receipts.map(receipt =>
                receipt._id === payload._id ? payload : receipt
            )
        
            return {
                ...state,
                receipts: newreceipts
            }
        
        default:
            return state
    }
}