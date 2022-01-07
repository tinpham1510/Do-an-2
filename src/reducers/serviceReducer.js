import { SERVICE_ADD, SERVICE_DELETE, SERVICE_FIND, SERVICE_LOAD_FAILED, SERVICE_LOAD_SUCCESS, SERVICE_UPDATE } from "../contexts/constant"

export const serviceReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case SERVICE_LOAD_SUCCESS:
            return {
                ...state,
                services: payload,
                servicesLoading: false
            }
        
        case SERVICE_LOAD_FAILED:
                return {
                    ...state,
                    services: payload,
                    servicesLoading: false
                }
            
        case SERVICE_ADD:
            return {
                ...state,
                services: [...state.services, payload]
               }


        case SERVICE_FIND:
            return { ...state, service: payload }


        case SERVICE_DELETE:
            return {
                ...state,
                services: state.services.filter(service => service._id !== payload)
            }   

        case SERVICE_UPDATE:
                const newServices = state.services.map(service =>
                     service._id === payload._id ? payload : service
                )
        
                return {
                    ...state,
                    services: newServices
                }
        default:
            return state
    }
}