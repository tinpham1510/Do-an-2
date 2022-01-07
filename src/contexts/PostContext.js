import axios from "axios";
import { createContext, useReducer } from "react";
import { postReducer } from "../reducers/postReducer";
import { apiUrl, POST_ADD, POST_DELETE, POST_FIND, POST_LOAD_FAILED, POST_LOAD_SUCCESS } from "./constant";


export const postContext = createContext()

const PostContextProvider = ({children}) =>{

    const [postState, dispatch] = useReducer(postReducer,{
        post: null,
        posts: [],
        postsLoading: true
    })
/// get all post
    const getPosts = async() =>{
        try {
            const reponse = await axios.get(`${apiUrl}/posts`)
            if(reponse)
            {
                dispatch({type: POST_LOAD_SUCCESS, payload: reponse.data.posts})
            }
        } catch (error) {
            dispatch({type: POST_LOAD_FAILED})
        }
    }
    /// add post
    const addPosts = async newPosts => {
		try {
			const response = await axios.post(`${apiUrl}/posts`, newPosts)

			if (response.data.success) {
				dispatch({ type: POST_ADD, payload: response.data.post })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}
    //
    const findPosts = postId => {
		const post = postState.posts.find(post => post._id === postId)
		dispatch({ type: POST_FIND, payload: post })
	}
    /// delete post
    const deletePosts = async postId =>{
        try {
            const reponse = await axios.delete(`${apiUrl}/posts/${postId}`)
            if(reponse.data.success)
            {
                dispatch({type: POST_DELETE, payload: postId})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const postContextData = {postState, getPosts, addPosts, deletePosts, findPosts}
    return (
        <postContext.Provider value={postContextData}>
            {children}
        </postContext.Provider>
    )
}
export default PostContextProvider;