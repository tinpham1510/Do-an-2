import axios from "axios";
import { createContext, useReducer } from "react";
import { totalReducer } from "../reducers/totalReducer";

import { apiUrl, TOTAL_ADD, TOTAL_DELETE, TOTAL_FIND, TOTAL_LOAD_FAILED, TOTAL_LOAD_SUCCESS, TOTAL_UPDATE } from "./constant";


export const TotalContext = createContext()

const TotalContextProvider = ({children}) =>{

    const [totalState, dispatch] = useReducer(totalReducer,{
        total: null,
        totals: [],
        totalsLoading: true
    })
/// get all room
    const getTotals = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/totals`)
            if(reponse)
            {
                dispatch({type: TOTAL_LOAD_SUCCESS, payload: reponse.data.totals})
            }
        } catch (error) {
            dispatch({type: TOTAL_LOAD_FAILED})
        }
    }
    /// add total
    const addTotals = async newtotal => {
		try {
			const response = await axios.post(`${apiUrl}/totals`, newtotal)

			if (response.data.success) {
				dispatch({ type: TOTAL_ADD, payload: response.data.total })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    ///
     const findTotals = totalId => {
		const total = totalState.totals.find(total => total._id === totalId)
		dispatch({ type: TOTAL_FIND , payload: total })
	}

    /// update total
    const updateTotals = async updatedtotal => {
		try {
			const response = await axios.put(
				`${apiUrl}/totals/${updatedtotal._id}`,
				updatedtotal
			)
			if (response.data.success) {
				dispatch({ type: TOTAL_UPDATE, payload: response.data.total })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

    /// delete total
    const deleteTotals = async totalId =>{
        try {
            const reponse = await axios.delete(`${apiUrl}/totals/${totalId}`)
            if(reponse.data.success)
            {
                dispatch({type: TOTAL_DELETE, payload: totalId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const totalContextData = {
        totalState,
        getTotals, 
        addTotals, 
        deleteTotals,
        findTotals,
        updateTotals
    }
    return (
        <TotalContext.Provider value={totalContextData}>
            {children}
        </TotalContext.Provider>
    )
}
export default TotalContextProvider;