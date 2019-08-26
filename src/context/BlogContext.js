import createDataContext  from './createDataContext';


//reducer
const blogReducer = (blogPosts, action) => {
    switch(action.type) {
        case 'addBlogPosts':
            return [
                ...blogPosts, 
                { 
                    title: action.payload.title, 
                    content: action.payload.content,
                    id: Math.floor(Math.random()*999)
                }
            ];
            
        case 'deleteBlogPosts':
            return blogPosts.filter((blog) => blog.id !== action.payload);
        case 'editBlogPosts':
            return blogPosts.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        default:
            return state;
    }
}

//helper functions
const addBlogPosts = (dispatch) => {
    return (title, content, callback) => {
        dispatch ({ type: 'addBlogPosts', payload: { title: title, content: content }})
        if (callback){
            callback();
        }
    }
}

const deleteBlogPosts = dispatch => {
    return (id) => {
        dispatch ({ type: 'deleteBlogPosts', payload: id})
    }
}

// //used to callback functions not needing the extra 'return'. Why is it needed now? Dispatch?
// const deleteBlogPosts = (id) => {
//     dispatch ({ type: 'deleteBlogPosts', payload: id})
// }

const editBlogPosts = dispatch => {
    return (id, title, content, callback) => {
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
    { addBlogPosts, deleteBlogPosts, editBlogPosts }, 
    []
    );




