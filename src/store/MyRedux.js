import { configureStore } from "@reduxjs/toolkit/";
import postSlice from "./PostsSlice";
import templateSlice from "./TemplateSlice";


const store = configureStore({
    reducer:{
        templates: templateSlice.reducer,
        posts: postSlice.reducer
    }
})

export default store;