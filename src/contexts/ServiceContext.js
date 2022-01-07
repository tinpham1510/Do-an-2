import axios from "axios";
import { createContext, useReducer } from "react";
import { serviceReducer } from "../reducers/serviceReducer";
import { apiUrl, SERVICE_ADD, SERVICE_DELETE, SERVICE_FIND, SERVICE_LOAD_FAILED, SERVICE_LOAD_SUCCESS, SERVICE_UPDATE } from "./constant";


export const ServiceContext = createContext()

const ServiceContextProvider = ({children}) =>{

    const [serviceState, dispatch] = useReducer(serviceReducer,{
        service: null,
        services: [],
        servicesLoading: true
    })
/// get all room
    const getServices = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/services`)
            if(reponse)
            {
                dispatch({type: SERVICE_LOAD_SUCCESS, payload: reponse.data.services})
            }
        } catch (error) {
            dispatch({type: SERVICE_LOAD_FAILED})
        }
    }
    /// add service
    const addServices = async newService => {
		try {
			const response = await axios.post(`${apiUrl}/services`, newService)

			if (response.data.success) {
				dispatch({ type: SERVICE_ADD, payload: response.data.service })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    ///
     const findServices = serviceId => {
		const service = serviceState.services.find(service => service._id === serviceId)
		dispatch({ type: SERVICE_FIND, payload: service })
	}

    /// update service
    const updateServices = async updatedService => {
		try {
			const response = await axios.put(
				`${apiUrl}/services/${updatedService._id}`,
				updatedService
			)
			if (response.data.success) {
				dispatch({ type: SERVICE_UPDATE, payload: response.data.service })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

    /// delete service
    const deleteServices = async serviceId =>{
        try {
            const reponse = await axios.delete(`${apiUrl}/services/${serviceId}`)
            if(reponse.data.success)
            {
                dispatch({type: SERVICE_DELETE, payload: serviceId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const serviceContextData = {
        serviceState,
        getServices, 
        addServices, 
        deleteServices,
        findServices,
        updateServices
    }
    return (
        <ServiceContext.Provider value={serviceContextData}>
            {children}
        </ServiceContext.Provider>
    )
}
export default ServiceContextProvider;