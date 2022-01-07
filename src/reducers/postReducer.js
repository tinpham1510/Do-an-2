import { POST_ADD, POST_DELETE, POST_FIND, POST_LOAD_FAILED, POST_LOAD_SUCCESS } from "../contexts/constant"

export const postReducer = (state, action) =>{
    const {type, payload} = action
    switch(type)
    {
        case POST_LOAD_SUCCESS:
            return {
                ...state,
                posts: payload,
                postsLoading: false
            }
        
        case POST_LOAD_FAILED:
                return {
                    ...state,
                    posts: payload,
                    postsLoading: false
                }
            
        case POST_ADD:
            return {
                ...state,
                posts: [...state.posts, payload]
               }

        case POST_FIND:
            return { ...state, post: payload }
    
        case POST_DELETE:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload)
            }   

        default:
            return state
    }
}