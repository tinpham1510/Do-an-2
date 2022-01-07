import { ROOM_ADD, ROOM_DELETE, ROOM_FIND, ROOM_LOAD_FAILED, ROOM_LOAD_SUCCESS, ROOM_UPDATE } from "../contexts/constant"

export const roomReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case ROOM_LOAD_SUCCESS:
            return {
                ...state,
                rooms: payload,
                roomsLoading: false
            }
        
        case ROOM_LOAD_FAILED:
            return {
                ...state,
                rooms: payload,
                roomsLoading: false
            }
        
        case ROOM_ADD:
			return {
				...state,
				rooms: [...state.rooms, payload]
			}


        case ROOM_DELETE:
            return {
				...state,
				rooms: state.rooms.filter(room => room._id !== payload)
			}   

        case ROOM_FIND:
            return { ...state, room: payload }
    
        case ROOM_UPDATE:
            const newRooms = state.rooms.map(room =>
                 room._id === payload._id ? payload : room
            )
    
            return {
                ...state,
                rooms: newRooms
            }
    

        default:
            return state
    }
}