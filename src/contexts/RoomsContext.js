import axios from "axios";
import { createContext, useReducer } from "react";
import { Alert } from "react-bootstrap";
import { roomReducer } from "../reducers/roomReducer";
import { apiUrl, ROOM_ADD, ROOM_DELETE, ROOM_FIND, ROOM_LOAD_FAILED, ROOM_LOAD_SUCCESS, ROOM_UPDATE } from "./constant";


export const RoomContext = createContext()

const RoomContextProvider = ({children}) =>{

    const [roomState, dispatch] = useReducer(roomReducer,{
        room: null,
        rooms: [],
        roomsLoading: true
    })

    const getRoomsStatus = async roomStatus =>{
        try {
            const reponse = await axios.get(`${apiUrl}/rooms/status${roomStatus}`)
            if(reponse)
            {
                dispatch({type: ROOM_LOAD_SUCCESS, payload: reponse.data.rooms})
            }
        } catch (error) {
            dispatch({type: ROOM_LOAD_FAILED})
        }
    }
    ///
    const getRoomsName = async roomName =>{
        try {
            const reponse = await axios.get(`${apiUrl}/rooms/name${roomName}`)
            if(reponse)
            {
                dispatch({type: ROOM_LOAD_SUCCESS, payload: reponse.data.rooms})
            }
        } catch (error) {
            dispatch({type: ROOM_LOAD_FAILED})
        }
    }
/// get all room
    const getRooms = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/rooms`)
            if(reponse)
            {
                dispatch({type: ROOM_LOAD_SUCCESS, payload: reponse.data.rooms})
            }
        } catch (error) {
            dispatch({type: ROOM_LOAD_FAILED})
        }
    }
    //// 
    const addRooms = async newRoom => {
		try {
			const response = await axios.post(`${apiUrl}/rooms`, newRoom)

			if (response.data.success) {
				dispatch({ type: ROOM_ADD, payload: response.data.room })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
        
		}
	}
    ///
    const findRooms = roomId => {
		const room = roomState.rooms.find(room => room._id === roomId)
		dispatch({ type: ROOM_FIND, payload: room })
	}

	// Update post
	const updateRooms = async updatedRoom => {
		try {
			const response = await axios.put(
				`${apiUrl}/rooms/${updatedRoom._id}`,
				updatedRoom
			)
			if (response.data.success) {
				dispatch({ type: ROOM_UPDATE, payload: response.data.room })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    ///
    const deleteRooms = async roomId =>{
        try {
            const reponse = await axios.delete(`${apiUrl}/rooms/${roomId}`)
            if(reponse.data.success)
            {
                dispatch({type: ROOM_DELETE, payload: roomId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const roomContextData = {roomState, getRooms, deleteRooms, addRooms, findRooms, updateRooms, getRoomsName, getRoomsStatus}
    return (
        <RoomContext.Provider value={roomContextData}>
            {children}
        </RoomContext.Provider>
    )
}
export default RoomContextProvider;