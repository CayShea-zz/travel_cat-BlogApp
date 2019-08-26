//*** : */Prior to persistent data storage with ngrok server
import createDataContext  from './createDataContext';
import jsonServer from '../api/jsonServer';


//reducer
const blogReducer = (blogPosts, action) => {
    switch(action.type) {
        // *** case 'addBlogPosts':
        //     return [
        //         ...blogPosts, 
        //         { 
        //             title: action.payload.title, 
        //             content: action.payload.content,
        //             id: Math.floor(Math.random()*999)
        //         }
        //     ];
            
        case 'deleteBlogPosts':
            return blogPosts.filter((blog) => blog.id !== action.payload);
        case 'editBlogPosts':
            return blogPosts.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case 'getBlogPosts':
            return action.payload;
        default:
            return state;
    }
}

//api call
const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');

        dispatch ({ type: 'getBlogPosts', payload: response.data })
    };
};


//helper functions
const addBlogPosts = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogPosts', { title: title, content: content });
        
        // *** dispatch ({ type: 'addBlogPosts', payload: response.data});
        if (callback){
            callback();
        };
    }
}

const deleteBlogPosts = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogPosts${id}`);
        dispatch ({ type: 'deleteBlogPosts', payload: id})
    }
}

// //used to callback functions not needing the extra 'return'. Why is it needed now? Dispatch?
// const deleteBlogPosts = (id) => {
//     dispatch ({ type: 'deleteBlogPosts', payload: id})
// }

const editBlogPosts = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogPosts${id}`, { title, content })
        
        dispatch ({ 
            type: 'editBlogPosts', 
            payload: { id, title, content }})
        if (callback){
            callback();
        }
        
    }
}


export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts }, 
    []
    );




