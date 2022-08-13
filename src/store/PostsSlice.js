import { createSlice } from "@reduxjs/toolkit/";


const postSlice = createSlice({
    name: 'posts',
    initialState: {posts: [], currentPost: {}},
    reducers:{
        addPost(state, action){
            console.log('p')
            state.posts = [...state.posts, action.payload]
        },
        deletePost(state, action){
            let id = action.payload
            state.posts = state.posts.filter((post) => post.id!==id)
        },
        editPost(state, action){
            state.currentPost = action.payload
        },
        savePost(state, action){
            let id = action.payload.id
            let postIndex = state.posts.findIndex((post) => post.id===id)
           state.posts[postIndex]=action.payload
           state.currentPost = {}
        }
    }
})

export const postSliceActions = postSlice.actions
export default postSlice;